import { Module } from '@nestjs/common';
import { AppController } from './users-organizations.controller';
import { AppService } from './users-organizations.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
