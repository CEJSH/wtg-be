import { Controller, Get, Query } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Get()
  async drawMap(
    @Query('address') address: string[],
    @Query('sigudong') sigudong: string,
  ) {
    // return await this.mapService.drawMap(address, sigudong);
  }
}
