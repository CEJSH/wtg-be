import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
import { ApiController } from './api.controller';
import { BuildingPermitInfoEntity } from 'src/entity/building-permit-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingPermitInfoRepository } from 'src/repository/building-permit-info.repository';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([BuildingPermitInfoEntity])],
  providers: [ApiService, BuildingPermitInfoRepository],
  exports: [ApiService],
  controllers: [ApiController],
})
export class ApiModule {}
