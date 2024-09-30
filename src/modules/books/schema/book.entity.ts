import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as moongose from 'mongoose'
import { Gender } from 'src/modules/genders/entities/gender.entity';
import {v4 as uuidv4} from 'uuid'



@Schema()
export class Book {

  @Prop({type:String, default: uuidv4 })
  _id

  @Prop({required:true})
  title: string;

  @Prop()
  author: string;

  @Prop()
  publicationDate: Date;

  @Prop({type:moongose.Schema.ObjectId, ref:'genders'})
  gender:Gender
}

export type BookDocument = HydratedDocument<Book>;
export const BookSchema = SchemaFactory.createForClass(Book);
