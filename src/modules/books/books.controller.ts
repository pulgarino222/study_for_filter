import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookPipe } from './pipes/create-book.pipe';
import { FindById } from './dto/find-by-Id.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Query } from '@nestjs/common';
import { FindByIdPipeCustom } from './pipes/find-by-id.pipe';
import { PaginationValidationPipe } from 'src/common/pipe/pagination.pipe';
import { BookQueryDto } from './dto/book-query.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body(CreateBookPipe) createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

 
  @Get()
  async findAll(@Query(PaginationValidationPipe) pagination: PaginationDto, @Query() query: BookQueryDto) {
    return this.booksService.findAll(pagination, query);
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

