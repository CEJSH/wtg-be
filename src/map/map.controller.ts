import { Controller, Get, Query } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Get('get-by-searched-region')
  async getData(@Query('b_code') b_code: string) {
    const data = await this.mapService.getBySearchedRegion(b_code);
    console.log(data);
    return { data: data.slice(0, 100), total: data.length };
  }
}
