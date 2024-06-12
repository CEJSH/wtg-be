import { Module } from '@nestjs/common';
import { BuildingPermitInfoEntity } from 'src/entity/building-permit-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingPermitInfoRepository } from 'src/repository/building-permit-info.repository';
import { MapService } from './map.service';
import { MapController } from './map.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingPermitInfoEntity])],
  providers: [MapService, BuildingPermitInfoRepository],
  exports: [MapService],
  controllers: [MapController],
})
export class MapModule {}
