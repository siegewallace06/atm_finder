import { Test, TestingModule } from '@nestjs/testing';
import { NearestAtmController } from './nearest_atm.controller';
import { NearestAtmService } from './nearest_atm.service';

describe('NearestAtmController', () => {
  let controller: NearestAtmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NearestAtmController],
      providers: [NearestAtmService],
    }).compile();

    controller = module.get<NearestAtmController>(NearestAtmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
