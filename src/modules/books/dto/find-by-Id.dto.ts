import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class FindById {
    @IsNotEmpty()
    @IsString()
    @IsUUID('all', { message: 'Invalid UUID format' })
    id: string;
}