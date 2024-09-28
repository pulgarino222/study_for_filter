import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as moongose from 'mongoose'
import { Gender } from 'src/modules/genders/entities/gender.entity';



@Schema()
export class Book {

  @Prop({required:true})
  title: string;

  @Prop()
  author: string;

  @Prop()
  publicationDate: Date;

  @Prop({type:moongose.Schema.ObjectId, ref:'Gender'})
  gender:Gender
}

export type CatDocument = HydratedDocument<Book>;
export const BookSchema = SchemaFactory.createForClass(Book);
