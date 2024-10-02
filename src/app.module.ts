import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import config from '../config';

// import { enviroments } from './enviroments';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AdminsController } from './controllers/admins.controller';
import { ClientsController } from './controllers/clients.controller';
import { ShipmentsController } from './controllers/shipments.controller';
import { BisonsController } from './controllers/bisons.controller';
import { CarriersController } from './controllers/carriers.controller';
import { CitiesController } from './controllers/cities.controller';
import { AdminsService } from './services/admins.service';
import { CarriersService } from './services/carriers.service';
import { BisonsService } from './services/bisons.service';
import { ClientsService } from './services/clients.service';
import { ShipmentsService } from './services/shipments.service';
import { CitiesService } from './services/cities.service';
import { DatabaseModule } from './database/database/database.module';

@Module({
  imports: [ConfigModule.forRoot({
              isGlobal: true, // Hace que la configuración esté disponible globalmente
              load: [config], // Cargar la configuración personalizada
          }),
          DatabaseModule,
        ],
  controllers: [AppController, AdminsController, CarriersController, BisonsController, ShipmentsController, ClientsController, CitiesController],
  providers: [AppService, AdminsService, CarriersService, BisonsService, ClientsService, ShipmentsService, CitiesService],
})
export class AppModule {}

// CHANGE FOR DATABASE CONNECTION WITH USEFACTORY
