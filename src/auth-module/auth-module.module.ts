import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModuleService } from './auth-module.service';
import { AuthModuleController } from './auth-module.controller';
import { Client, ClientSchema } from '../entities/clients.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),],
  controllers: [AuthModuleController],
  providers: [AuthModuleService],
})
export class AuthModuleModule {}
