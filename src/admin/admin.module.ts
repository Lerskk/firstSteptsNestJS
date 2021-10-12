import { Module } from '@nestjs/common';
import { adminControllers } from './admin.controller';

@Module({
  imports: [],
  controllers: [adminControllers],
  providers: [],
})
export class adminModule {}
