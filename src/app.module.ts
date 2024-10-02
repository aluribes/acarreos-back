import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from '../config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

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

import { Admin, AdminSchema } from './entities/admins.entity';
import { Bison, BisonSchema } from './entities/bisons.entity';
import { Carrier, CarrierSchema } from './entities/carriers.entity';
import { City, CitySchema } from './entities/city.entity';
import { Client, ClientSchema } from './entities/clients.entity';
import { Shipment, ShipmentSchema } from './entities/shipments.entity';

import { DatabaseModule } from './database/database/database.module';

@Module({
  imports: [ConfigModule.forRoot({
              isGlobal: true,
              load: [config],
          }),
          DatabaseModule,
          MongooseModule.forFeature([
            { name: Admin.name, schema: AdminSchema },
            { name: Bison.name, schema: BisonSchema },
            { name: Carrier.name, schema: CarrierSchema },
            { name: City.name, schema: CitySchema },
            { name: Client.name, schema: ClientSchema },
            { name: Shipment.name, schema: ShipmentSchema },
          ])
        ],
  controllers: [AppController, AdminsController, CarriersController, BisonsController, ShipmentsController, ClientsController, CitiesController],
  providers: [AppService, AdminsService, CarriersService, BisonsService, ClientsService, ShipmentsService, CitiesService],
})
export class AppModule {}
