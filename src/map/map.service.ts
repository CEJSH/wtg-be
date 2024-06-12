import { Injectable } from '@nestjs/common';
import { BuildingPermitInfoRepository } from 'src/repository/building-permit-info.repository';

@Injectable()
export class MapService {
  constructor(
    private buildingPermitInfoRepository: BuildingPermitInfoRepository,
  ) {}

  async getBySearchedRegion(b_code: string): Promise<any> {
    return await this.buildingPermitInfoRepository.getByName(b_code);
  }
}
