import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: 'papa.:admin.localhost' })
export class adminControllers {
  @Get()
  hola(@HostParam('admin') admin: string): string {
    return admin;
  }
}
