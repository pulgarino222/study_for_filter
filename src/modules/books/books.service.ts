import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {BookInterface} from './interfaces/book-interface.interface'
import { Book } from './schema/book.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService implements BookInterface {

  constructor(@InjectModel(Book.name) private bookSchema:Model<Book>){}


  create(createBook: CreateBookDto):Promise<Book> {
    const newUser=new this.bookSchema(createBook)
    return newUser.save()
    
  }

  findAll():Promise<Book[]> {
    return this.bookSchema.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
