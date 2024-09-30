import {CreateBookDto} from '../dto/create-book.dto'
import { FindById } from '../dto/find-by-Id.dto'
import { UpdateBookDto } from '../dto/update-book.dto'
import {Book} from '../schema/book.entity'



export interface BookInterface {

    create(createBook: CreateBookDto):Promise<Book>
    findAll():Promise<Book[]>
    findOne(id:FindById):Promise<Book>
    update(id:FindById, updateBook: UpdateBookDto):Promise<Book>
    remove(id:FindById):Promise<void>
}
