import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingPermitInfoEntity } from './entity/building-permit-info.entity';
import { ApiModule } from './api/api.module';
import { HousePermitInfoEntity } from './entity/house-permit-info.entity';
import { MapController } from './map/map.controller';
import { MapService } from './map/map.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'wtg',
      entities: [BuildingPermitInfoEntity, HousePermitInfoEntity],
      synchronize: true,
    }),
    ApiModule,
  ],
  controllers: [AppController, MapController],
  providers: [AppService, MapService],
})
export class AppModule {}
