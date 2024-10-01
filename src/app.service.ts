import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
//import config from './config'; //verify installation

@Injectable()
export class AppService {
  getHello(): string {
    return 'Home';
  }
}

// CHANGE FOR DATABASE CONNECTION
