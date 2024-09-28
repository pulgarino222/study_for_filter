import { IsString,IsNotEmpty,IsOptional,IsDate} from "class-validator";
import { Gender } from "src/modules/genders/entities/gender.entity";


export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title:string


    @IsNotEmpty()
    @IsString()
    author:string


    @IsNotEmpty()
    @IsDate()
    publicationDate:Date

    @IsNotEmpty()
    @IsString()
    gender:Gender

}
