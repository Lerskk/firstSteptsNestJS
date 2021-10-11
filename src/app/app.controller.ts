import { Controller, Get, Header, Post } from '@nestjs/common';
import { Request } from 'express';

interface body {
  username: string;
  id: number;
}

@Controller()
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This actions returns all cats';
  }
}
