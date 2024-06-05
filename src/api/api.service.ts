import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { BuildingPermitInfoEntity } from 'src/entity/building-permit-info.entity';
import { HousePermitInfoEntity } from 'src/entity/house-permit-info.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';

@Injectable()
export class ApiService {
  constructor(
    private readonly httpService: HttpService,
    private dataSource: DataSource,
    @InjectRepository(BuildingPermitInfoEntity)
    private readonly buildingPermitInfoRepository: Repository<BuildingPermitInfoEntity>,
    @InjectRepository(HousePermitInfoEntity)
    private readonly housePermitInfoRepository: Repository<HousePermitInfoEntity>,
  ) {}

  // 해당 시군구 법정동 데이터의 양을 파악 : totalCount 리턴
  async getTotalCount(
    which: string,
    sigunguCd: string,
    bjdongCd: string,
  ): Promise<number> {
    if (which === 'building') {
      const url =
        'http://apis.data.go.kr/1613000/ArchPmsService_v2/getApBasisOulnInfo';
      const queryParams =
        '?' +
        encodeURIComponent('serviceKey') +
        '=U6mE%2FsVh5ntHHu%2B1itc5F4n7G47gHusiLVHD1%2B5ofQfZBK8Vh%2BFw4ByUTXcW9Avf4O0MO%2BNTI3RTBn%2FRA4FGuQ%3D%3D' + // Service Key
        '&' +
        encodeURIComponent('sigunguCd') +
        '=' +
        encodeURIComponent(sigunguCd) + // 시군구 코드
        '&' +
        encodeURIComponent('bjdongCd') +
        '=' +
        encodeURIComponent(bjdongCd) + // 법정동 코드
        '&' +
        encodeURIComponent('platGbCd') +
        '=' +
        encodeURIComponent('0');

      const response = await firstValueFrom(
        this.httpService.get(url + queryParams),
      );
      console.log(response.data.response.body.totalCount);
      const data = response.data.response.body.totalCount;
      return data;
    } else {
      const url =
        'http://apis.data.go.kr/1611000/HsPmsService/getHpBasisOulnInfo';
      const queryParams =
        '?' +
        encodeURIComponent('serviceKey') +
        '=U6mE%2FsVh5ntHHu%2B1itc5F4n7G47gHusiLVHD1%2B5ofQfZBK8Vh%2BFw4ByUTXcW9Avf4O0MO%2BNTI3RTBn%2FRA4FGuQ%3D%3D' + // Service Key
        '&' +
        encodeURIComponent('sigunguCd') +
        '=' +
        encodeURIComponent(sigunguCd) + // 시군구 코드
        '&' +
        encodeURIComponent('bjdongCd') +
        '=' +
        encodeURIComponent(bjdongCd) + // 법정동 코드
        '&' +
        encodeURIComponent('platGbCd') +
        '=' +
        encodeURIComponent('0');

      const response = await firstValueFrom(
        this.httpService.get(url + queryParams),
      );
      console.log(response.data.response.body.totalCount);
      const data = response.data.response.body.totalCount;
      return data;
    }
  }

  // 해당 시군구 법정동 데이터 저장
  async getData(
    sigunguCd: string,
    bjdongCd: string,
    entityManager?: EntityManager,
  ): Promise<any> {
    try {
      const theTotalCount: number = await this.getTotalCount(
        'house',
        sigunguCd,
        bjdongCd,
      );
      const totalPages = Math.ceil(theTotalCount / 100); // 총 페이지 수 계산

      for (let i = 1; i <= totalPages; i++) {
        const permitInfoData = await this.fetchData(
          'house',
          sigunguCd,
          bjdongCd,
          i,
        );
        await this.saveHouseData(permitInfoData);
      }
    } catch (error) {
      console.error('Error fetching or saving data:', error);
      // 에러를 적절히 처리하세요.
    }
  }

  private async fetchData(
    which: string,
    sigunguCd: string,
    bjdongCd: string,
    pageNo: number,
  ): Promise<any> {
    if (which === 'building') {
      const url =
        'http://apis.data.go.kr/1613000/ArchPmsService_v2/getApBasisOulnInfo';
      const queryParams =
        '?' +
        encodeURIComponent('serviceKey') +
        '=U6mE%2FsVh5ntHHu%2B1itc5F4n7G47gHusiLVHD1%2B5ofQfZBK8Vh%2BFw4ByUTXcW9Avf4O0MO%2BNTI3RTBn%2FRA4FGuQ%3D%3D' + // Service Key
        '&' +
        encodeURIComponent('sigunguCd') +
        '=' +
        encodeURIComponent(sigunguCd) + // 시군구 코드
        '&' +
        encodeURIComponent('bjdongCd') +
        '=' +
        encodeURIComponent(bjdongCd) + // 법정동 코드
        '&' +
        encodeURIComponent('platGbCd') +
        '=' +
        encodeURIComponent('0') +
        '&' +
        encodeURIComponent('numOfRows') +
        '=' +
        encodeURIComponent('100') +
        '&' +
        encodeURIComponent('pageNo') +
        '=' +
        encodeURIComponent(pageNo.toString());

      const response = await firstValueFrom(
        this.httpService.get(url + queryParams),
      );
      return response.data.response.body.items.item;
    } else {
      const url =
        'http://apis.data.go.kr/1611000/HsPmsService/getHpBasisOulnInfo';
      const queryParams =
        '?' +
        encodeURIComponent('serviceKey') +
        '=U6mE%2FsVh5ntHHu%2B1itc5F4n7G47gHusiLVHD1%2B5ofQfZBK8Vh%2BFw4ByUTXcW9Avf4O0MO%2BNTI3RTBn%2FRA4FGuQ%3D%3D' + // Service Key
        '&' +
        encodeURIComponent('sigunguCd') +
        '=' +
        encodeURIComponent(sigunguCd) + // 시군구 코드
        '&' +
        encodeURIComponent('bjdongCd') +
        '=' +
        encodeURIComponent(bjdongCd) + // 법정동 코드
        '&' +
        encodeURIComponent('platGbCd') +
        '=' +
        encodeURIComponent('0') +
        '&' +
        encodeURIComponent('numOfRows') +
        '=' +
        encodeURIComponent('100') +
        '&' +
        encodeURIComponent('pageNo') +
        '=' +
        encodeURIComponent(pageNo.toString());

      const response = await firstValueFrom(
        this.httpService.get(url + queryParams),
      );
      return response.data.response.body.items.item;
    }
  }

  private async saveBuildingData(data: any): Promise<void> {
    try {
      await this.buildingPermitInfoRepository.save(data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  private async saveHouseData(data: any): Promise<void> {
    try {
      await this.housePermitInfoRepository.save(data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }
}
