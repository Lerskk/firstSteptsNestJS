import { Controller, Get, HostParam } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller({ host: 'papa.:admin.localhost' })
export class adminControllers {
  @Get()
  async findAlll(): Promise<any[]> {
    return [];
  }
  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }
}
