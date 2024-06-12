import { InjectRepository } from '@nestjs/typeorm';
import { BuildingPermitInfoEntity } from 'src/entity/building-permit-info.entity';
import { DataSource, Like, Repository } from 'typeorm';

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

  async getByName(name: string) {
    const sigungu = name.slice(0, 5);
    const bjdong = name.slice(5, 10);
    console.log(sigungu, bjdong);
    return await this.find({
      where: {
        sigunguCd: sigungu,
        bjdongCd: bjdong,
        realStcnsDay: Like(`${2024}%`),
      },
      order: {
        realStcnsDay: 'DESC',
      },
    });
  }
}
