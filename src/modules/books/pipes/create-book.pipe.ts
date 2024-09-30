import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Types } from 'mongoose';

@Injectable()
export class CreateBookPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (metatype !== CreateBookDto) {
      return value;
    }

    if (typeof value.publicationDate === 'string') {
      value.publicationDate = new Date(value.publicationDate);
    }

    const object = plainToInstance(metatype, value);
    console.log(object);

    const errors = await validate(object);
    console.log(errors);

    if (errors.length > 0) {
      throw new BadRequestException('There is an error in the sent data. Please ensure it matches the CreateBookDto structure.');
    }

    return value;
  }
}
