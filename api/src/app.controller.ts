import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('baek')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('temp')
  getHello(): string {
    return this.appService.getHello();
  }
}
