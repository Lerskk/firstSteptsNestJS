import { Module } from '@nestjs/common';
import { adminModule } from './../admin/admin.module';
import { CatsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [adminModule],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
