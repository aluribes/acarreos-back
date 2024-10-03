import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from '../entities/clients.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthModuleService {
    constructor(
        @InjectModel(Client.name) private clientModel: Model<Client>,
      ) {}
    
      async validateUser(username: string, password: string): Promise<any> {
        const client = await this.clientModel.findOne({ username }).exec();
        if (!client) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        const isPasswordValid = await bcrypt.compare(password, client.password);
        if (!isPasswordValid) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        // Si la validación es correcta, devuelve el usuario (sin la contraseña)
        const { password: _, ...result } = client.toObject();
        return result;
      }
}
