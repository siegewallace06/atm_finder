import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NearestAtmModule } from './nearest_atm/nearest_atm.module';

@Module({
  imports: [NearestAtmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
