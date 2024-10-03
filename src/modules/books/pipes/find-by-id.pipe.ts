import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { FindById } from '../dto/find-by-Id.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BooksService } from '../books.service';

@Injectable()
export class FindByIdPipeCustom implements PipeTransform {
  constructor(@Inject() private bookService: BooksService) {}

  async transform(value: any, { metatype }: ArgumentMetadata) {
    // Solo aplica el pipe si el metatype es FindById
    if (metatype !== FindById) {
      return value;
    }

    // Crea una instancia de FindById
    const object = plainToInstance(FindById, { id: value });

    // Valida el objeto
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation error: Invalid format for ID.',
      );
    }

    // Verifica la existencia del ID en la base de datos
    const book = await this.bookService.findOne(value);
    if (!book) {
      throw new BadRequestException('The ID was not found.');
    }

    // Retorna el valor (ID)
    return value;
  }
}
