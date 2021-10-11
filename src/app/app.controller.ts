import { Controller, Get, Header, Param, Post, Redirect } from '@nestjs/common';
import { Request } from 'express';

interface body {
  username: string;
  id: number;
}

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return "I'm all the cats";
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns ${params.id} cat`;
  }
}
