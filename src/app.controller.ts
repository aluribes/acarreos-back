import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')  // 👈 Without slashes
  newEndpoint() {
    return 'yo soy nuevo';
}

  @Get('/ruta/') // 👈 With slashes
  hello() {
    return 'con /sas/';
}
}
