import { IsString, IsNotEmpty, IsDate,IsOptional, IsMongoId } from "class-validator";
import { Types } from "mongoose";

export class CreateBookDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsDate()
    publicationDate: Date;

    @IsMongoId()
    @IsOptional()
    @IsString()
    gender: Types.ObjectId;
}
