import { Test, TestingModule } from '@nestjs/testing';
import { BisonsService } from './bisons.service';

describe('BisonsService', () => {
  let service: BisonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BisonsService],
    }).compile();

    service = module.get<BisonsService>(BisonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
