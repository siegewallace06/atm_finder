import { Controller, Get, Logger, Query } from '@nestjs/common';
import { NearestAtmService } from './nearest_atm.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('nearest-atm')
@ApiTags('nearest-atm')
export class NearestAtmController {
  constructor(private readonly nearestAtmService: NearestAtmService) {

  }
  private readonly logger = new Logger(NearestAtmController.name);

  @Get()
  async findNearestAtm(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
    @Query('radiusKm') radiusKm: number = 1,
  ) {
    this.logger.log(`Finding nearest ATM for latitude: ${latitude}, longitude: ${longitude}`);
    const nearestAtm = await this.nearestAtmService.findNearestAtm(latitude, longitude, radiusKm);
    return nearestAtm;
  }
}
