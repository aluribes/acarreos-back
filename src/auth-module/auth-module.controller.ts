import { Controller, Post, Body } from '@nestjs/common';
import { AuthModuleService } from './auth-module.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth-module')
@Controller('auth-module')
export class AuthModuleController {
  constructor(private readonly authModuleService: AuthModuleService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    return await this.authModuleService.validateUser(username, password);
  }
}
