import { Module } from '@nestjs/common';
import { NearestAtmService } from './nearest_atm.service';
import { NearestAtmController } from './nearest_atm.controller';

@Module({
  controllers: [NearestAtmController],
  providers: [NearestAtmService],
})
export class NearestAtmModule {}
