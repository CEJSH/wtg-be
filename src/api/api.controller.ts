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
}
