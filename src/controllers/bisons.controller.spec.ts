import { Test, TestingModule } from '@nestjs/testing';
import { BisonsController } from './bisons.controller';
import { BisonsService } from '../services/bisons.service';

describe('BisonsController', () => {
  let controller: BisonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BisonsController],
      providers: [BisonsService],
    }).compile();

    controller = module.get<BisonsController>(BisonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
