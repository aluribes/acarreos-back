import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Db } from 'mongodb';
//import config from './config'; //verify installation

@Injectable()
export class AppService {
  constructor(
    @Inject('MONGO') private database: Db
  ) {}
  getHello(): string {
    return 'Home';
  }
}

// CHANGE FOR DATABASE CONNECTION
