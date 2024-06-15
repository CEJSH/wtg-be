import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('construction')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  @Get('create-data')
  async createData(
    @Query('sigunguCd') sigunguCd: string,
    @Query('bjdongCd') bjdongCd: string,
  ) {
    const data = await this.apiService.createData(sigunguCd, bjdongCd);
    return data;
  }

  @Get('get-by-searched-region')
  async getData(@Query('b_code') b_code: string) {
    const data = await this.apiService.getBySearchedRegion(b_code);
    console.log(data);
    return { data: data.slice(0, 200), total: data.length };
  }
}
