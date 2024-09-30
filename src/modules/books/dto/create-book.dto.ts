import { IsString, IsNotEmpty, IsDate,IsOptional } from "class-validator";
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

    @IsOptional()
    @IsString()
    gender: Types.ObjectId;
}
