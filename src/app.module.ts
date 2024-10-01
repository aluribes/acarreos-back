import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsController } from './controllers/admins/admins.controller';
import { CarriersController } from './controllers/carriers/carriers.controller';
import { UsersController } from './controllers/users/users.controller';
import { BisonsController } from './controllers/bisons/bisons.controller';
import { ShipmentsController } from './controllers/shipments/shipments.controller';
import { ClientsController } from './controllers/clients/clients.controller';
import { AdminsController } from './controllers/admins.controller';
import { ClientsController } from './controllers/clients.controller';
import { ShipmentsController } from './controllers/shipments.controller';
import { BisonsController } from './controllers/bisons.controller';
import { CarriersController } from './controllers/carriers.controller';
import { AdminsService } from './services/admins.service';
import { CarriersService } from './services/carriers.service';
import { BisonsService } from './services/bisons.service';
import { ClientsService } from './services/clients.service';
import { ShipmentsService } from './services/shipments.service';
import { AdminsModule } from './admins/admins.module';
import { BisonsModule } from './bisons/bisons.module';
import { ClientsModule } from './clients/clients.module';
import { CarriersModule } from './carriers/carriers.module';
import { ShipmentsModule } from './shipments/shipments.module';

@Module({
  imports: [AdminsModule, BisonsModule, ClientsModule, CarriersModule, ShipmentsModule],
  controllers: [AppController, AdminsController, CarriersController, UsersController, BisonsController, ShipmentsController, ClientsController],
  providers: [AppService, AdminsService, CarriersService, BisonsService, ClientsService, ShipmentsService],
})
export class AppModule {}
