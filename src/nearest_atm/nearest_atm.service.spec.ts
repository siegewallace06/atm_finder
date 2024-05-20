import { Test, TestingModule } from '@nestjs/testing';
import { NearestAtmService } from './nearest_atm.service';

describe('NearestAtmService', () => {
  let service: NearestAtmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NearestAtmService],
    }).compile();

    service = module.get<NearestAtmService>(NearestAtmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
