import { InjectRepository } from '@nestjs/typeorm';
import { BuildingPermitInfoEntity } from 'src/entity/building-permit-info.entity';
import { DataSource, Repository } from 'typeorm';

export class BuildingPermitInfoRepository extends Repository<BuildingPermitInfoEntity> {
  constructor(
    @InjectRepository(BuildingPermitInfoEntity) private dataSource: DataSource,
  ) {
    super(BuildingPermitInfoEntity, dataSource.manager);
  }
  async saveBuildingData(data: any): Promise<void> {
    try {
      await this.save(data);
    } catch (error) {
      console.error('Error saving building permit info data:', error);
    }
  }

  async getAll() {
    return await this.findAndCount({
      order: {
        stcnsDelayDay: 'DESC',
      },
    }).then((ret) => {
      return ret;
    });
  }
}
