import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingPermitInfoEntity } from './entity/building-permit-info.entity';
import { ApiModule } from './api/api.module';
import { MapModule } from './map/map.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'wtg',
      entities: [BuildingPermitInfoEntity],
      synchronize: true,
    }),
    ApiModule,
    MapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
