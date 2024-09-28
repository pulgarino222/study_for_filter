import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/book.entity';

@Module({
  imports:[MongooseModule.forFeature([{schema:BookSchema, name:Book.name}])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
