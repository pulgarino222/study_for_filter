import {CreateBookDto} from '../dto/create-book.dto'
import { FindById } from '../dto/find-by-Id.dto'
import { UpdateBookDto } from '../dto/update-book.dto'
import {Book} from '../schema/book.entity'
import { PaginationDto } from 'src/common/dto/pagination.dto'



export interface BookInterface {

    create(createBook: CreateBookDto):Promise<Book>
    findAll(Pagination:PaginationDto):Promise<{ total: number; page: number; limit: number; data: Book[] }> 
    findOne(id:FindById):Promise<Book>
    update(id:FindById, updateBook: UpdateBookDto):Promise<Book>
    remove(id:FindById):Promise<void>
}
