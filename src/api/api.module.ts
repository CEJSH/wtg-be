import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
import { ApiController } from './api.controller';
import { BuildingPermitInfoEntity } from 'src/entity/building-permit-info.entity';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HousePermitInfoEntity } from 'src/entity/house-permit-info.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([BuildingPermitInfoEntity, HousePermitInfoEntity]),
  ],
  providers: [
    ApiService,
    Repository<BuildingPermitInfoEntity>,
    Repository<HousePermitInfoEntity>,
  ],
  exports: [ApiService],
  controllers: [ApiController],
})
export class ApiModule {}
