import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
import { ApiController } from './api.controller';
import { BuildingPermitInfoEntity } from 'src/entity/building-permit-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HousePermitInfoEntity } from 'src/entity/house-permit-info.entity';
import { BuildingPermitInfoRepository } from 'src/repository/building-permit-info.repository';
import { HousePermitInfoRepository } from 'src/repository/house-permit-info.repository copy';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([BuildingPermitInfoEntity, HousePermitInfoEntity]),
  ],
  providers: [
    ApiService,
    BuildingPermitInfoRepository,
    HousePermitInfoRepository,
  ],
  exports: [ApiService],
  controllers: [ApiController],
})
export class ApiModule {}
