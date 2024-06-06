import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiDetail } from 'src/decorator/api-detail/api-detail.decorator';

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

  @Get('get-all')
  @ApiDetail({
    summary: '전체 데이터 가져오기',
    okStatus: 200,
    okDescription: '성공',
    errorDescription: '실패',
  })
  async getAll() {
    const buildingData = await this.apiService.getBuildingDataAll();
    const houseData = await this.apiService.getHouseDataAll();
    return { building: buildingData, house: houseData, status: 200 };
  }
}
