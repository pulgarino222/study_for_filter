import {CreateBookDto} from '../dto/create-book.dto'
import {Book} from '../schema/book.entity'


export interface BookInterface {

    create(createBook: CreateBookDto):Promise<Book>
    findAll():Promise<Book[]>
    




}
