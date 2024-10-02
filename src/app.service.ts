import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(
    @Inject('MONGO') private database: Db
  ) {}
  getHello(): string {
    return 'Home';
  }
}
