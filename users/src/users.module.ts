import { Module } from '@nestjs/common';
import { AppController } from './users.controller';
import { AppService } from './users.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
