import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookPipe } from './pipes/create-book.pipe';
import { FindById } from './dto/find-by-Id.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { query } from 'express';
import { Query } from '@nestjs/common';
import { FindByIdPipeCustom } from './pipes/find-by-id.pipe';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body(CreateBookPipe) createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

 
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.booksService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id',FindByIdPipeCustom) id:FindById) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',FindByIdPipeCustom) id:FindById, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id',FindByIdPipeCustom) id:FindById) {
    return this.booksService.remove(id);
  }
}

