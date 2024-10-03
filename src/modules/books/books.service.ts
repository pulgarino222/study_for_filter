import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {BookInterface} from './interfaces/book-interface.interface'
import { Book } from './schema/book.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindById } from './dto/find-by-Id.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { BookQueryDto } from './dto/book-query.dto';

@Injectable()
export class BooksService implements BookInterface {

  constructor(@InjectModel(Book.name) private bookSchema:Model<Book>){}


  create(createBook: CreateBookDto):Promise<Book> {
    const newUser=new this.bookSchema(createBook)
    return newUser.save()
    
  }

  async findAll(pagination: PaginationDto, query: BookQueryDto): Promise<{ total: number; page: number; limit: number; data: Book[] }> {
    const { page, limit } = pagination;
    const { author, genre, startDate, endDate } = query;

    // Construir el filtro
    const filter: any = {};
    if (author) {
      filter.author = author;
    }
    if (genre) {
      filter.genre = genre;
    }
    if (startDate || endDate) {
      filter.publishedDate = {};
      if (startDate) {
        filter.publishedDate.$gte = new Date(startDate);
      }
      if (endDate) {
        filter.publishedDate.$lte = new Date(endDate);
      }
    }

    // Obtener los datos paginados
    const data = await this.bookSchema
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const total = await this.bookSchema.countDocuments(filter);

    return {
      total,
      page,
      limit,
      data,
    };
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
