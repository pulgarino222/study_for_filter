import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {BookInterface} from './interfaces/book-interface.interface'
import { Book } from './schema/book.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindById } from './dto/find-by-Id.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class BooksService implements BookInterface {

  constructor(@InjectModel(Book.name) private bookSchema:Model<Book>){}


  create(createBook: CreateBookDto):Promise<Book> {
    const newUser=new this.bookSchema(createBook)
    return newUser.save()
    
  }

  findAll(pagination: PaginationDto): Promise<{ total: number; page: number; limit: number; data: Book[] }> {
    const { page, limit } = pagination;
  
    return this.bookSchema
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec()
      .then(async (data) => {
        const total = await this.bookSchema.countDocuments();
        return {
          total,
          page,
          limit,
          data,
        };
      });
  }
  findOne(id:FindById):Promise<Book> {
    return this.bookSchema.findById(id);
  }

  update(id:FindById, updateBook: UpdateBookDto):Promise<Book> {
    return this.bookSchema.findByIdAndUpdate(id,updateBook)
  }

  remove(id:FindById):Promise<void>{
    return this.bookSchema.findByIdAndDelete(id)

    
  }
}
