import { InjectRepository } from '@nestjs/typeorm';
import { HousePermitInfoEntity } from 'src/entity/house-permit-info.entity';
import { DataSource, Repository } from 'typeorm';

export class HousePermitInfoRepository extends Repository<HousePermitInfoEntity> {
  constructor(
    @InjectRepository(HousePermitInfoEntity) private dataSource: DataSource,
  ) {
    super(HousePermitInfoEntity, dataSource.manager);
  }
  async saveHouseData(data: any): Promise<void> {
    try {
      await this.save(data);
    } catch (error) {
      console.error('Error saving house permit info data:', error);
    }
  }

  async getAll() {
    return await this.findAndCount({
      order: {
        stcnsSchedDay: 'DESC',
      },
    }).then((ret) => {
      return ret;
    });
  }
}
