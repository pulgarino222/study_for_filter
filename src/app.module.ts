import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './modules/books/books.module';
import { GenderModule } from './modules/genders/gender.module';
import { ConfigModule,ConfigService} from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }
    ),
    MongooseModule.forRoot(process.env.URI), 
    BooksModule, 
    GenderModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide:APP_FILTER,
      useClass:AllExceptionsFilter
    }
  ],
  
}

)
export class AppModule {}

