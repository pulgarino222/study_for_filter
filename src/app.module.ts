import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './modules/books/books.module';
import { GenderModule } from './modules/genders/gender.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://pulgarinhernandezjuanfelipe:Pecera2923@cluster0.1njrvc0.mongodb.net/'), BooksModule, GenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
