import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('building')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  @Get()
  async getData() {
    const data = await this.apiService.getData('11620', '10100');
    return data;
  }
}
