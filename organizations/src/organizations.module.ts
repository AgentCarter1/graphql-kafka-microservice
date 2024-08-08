import { Module } from '@nestjs/common';
import { AppController } from './organizations.controller';
import { AppService } from './organizations.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
