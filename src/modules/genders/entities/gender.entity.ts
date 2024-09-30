import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as moongose from 'mongoose'
import { Book } from "src/modules/books/schema/book.entity";


@Schema()
export class Gender {
    @Prop()
    name:string

    @Prop()
    description:string

    @Prop({type: moongose.Schema.ObjectId, ref:'Books' })
    books:Book
}

export type GenderDocument= HydratedDocument<Gender>
export const schemaGender= SchemaFactory.createForClass(Gender)
