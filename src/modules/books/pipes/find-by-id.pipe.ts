import { ArgumentMetadata, BadRequestException, Inject, Injectable, PipeTransform } from '@nestjs/common';
import { FindById } from '../dto/find-by-Id.dto';
import { plainToInstance } from 'class-transformer';
import { IsUUID, validate } from 'class-validator';
import { BooksService } from '../books.service';

@Injectable()
export class FindByIdPipeCustom implements PipeTransform {
  constructor(@Inject()private bookService:BooksService){}


  async transform(value: any, {metatype}: ArgumentMetadata) {

    if (metatype!==FindById){
      return value
    }

    
    const object= plainToInstance(metatype,value)
    const errors=await validate(object)

    if(errors.length>0){
      throw new BadRequestException("there is a error in the validation of id are you sure tha id is valid invalid format")

    }

    const id=await this.bookService.findOne(value)
    if(!id){
      throw new BadRequestException("the id was not found ")

    }

    return value
    
  }
}
