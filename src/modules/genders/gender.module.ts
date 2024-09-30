import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { GenderController } from './gender.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gender, schemaGender } from './entities/gender.entity';

@Module({
  imports:[MongooseModule.forFeature([{schema:schemaGender,  name:Gender.name }])],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
