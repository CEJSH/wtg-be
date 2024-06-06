import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { BuildingPermitInfoRepository } from 'src/repository/building-permit-info.repository';
import { HousePermitInfoRepository } from 'src/repository/house-permit-info.repository copy';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class ApiService {
  constructor(
    private housePermitInfoRepository: HousePermitInfoRepository,
    private buildingPermitInfoRepository: BuildingPermitInfoRepository,
    private readonly httpService: HttpService,
    private dataSource: DataSource,
  ) {}

  // 해당 시군구 법정동 데이터 양을 파악 : totalCount 리턴
  async getTotalCount(
    which: string,
    sigunguCd: string,
    bjdongCd: string,
  ): Promise<number> {
    if (which === 'building') {
      const url =
        'http://apis.data.go.kr/1613000/ArchPmsService_v2/getApBasisOulnInfo';

      const params = new URLSearchParams({
        serviceKey:
          'U6mE/sVh5ntHHu+1itc5F4n7G47gHusiLVHD1+5ofQfZBK8Vh+Fw4ByUTXcW9Avf4O0MO+NTI3RTBn/RA4FGuQ==', // 서비스 키
        sigunguCd: sigunguCd,
        bjdongCd: bjdongCd,
        platGbCd: '0', // 대지구분코드
      });

      const response = await firstValueFrom(
        this.httpService.get(`${url}?${params}`),
      );
      console.log(response.data.response.body.totalCount);
      const data = response.data.response.body.totalCount;
      return data;
    } else {
      const url =
        'http://apis.data.go.kr/1611000/HsPmsService/getHpBasisOulnInfo';
      const params = new URLSearchParams({
        serviceKey:
          'U6mE/sVh5ntHHu+1itc5F4n7G47gHusiLVHD1+5ofQfZBK8Vh+Fw4ByUTXcW9Avf4O0MO+NTI3RTBn/RA4FGuQ==', // 서비스 키
        sigunguCd: sigunguCd,
        bjdongCd: bjdongCd,
        platGbCd: '0', // 대지구분코드
      });
      const response = await firstValueFrom(
        this.httpService.get(`${url}?${params}`),
      );
      console.log(response.data.response.body.totalCount);
      const data = response.data.response.body.totalCount;
      return data;
    }
  }

  // 해당 시군구 법정동 데이터 생성 밑 저장
  async createData(
    sigunguCd: string,
    bjdongCd: string,
    entityManager?: EntityManager,
  ): Promise<any> {
    try {
      const theTotalCountOfHouse: number = await this.getTotalCount(
        'house',
        sigunguCd,
        bjdongCd,
      );
      const theTotalCountOfBuilding: number = await this.getTotalCount(
        'building',
        sigunguCd,
        bjdongCd,
      );
      const totalPagesOfHouse = Math.ceil(theTotalCountOfHouse / 100); // 총 페이지 수 계산
      const totalPagesOfBuilding = Math.ceil(theTotalCountOfBuilding / 100);

      for (let i = 1; i <= totalPagesOfHouse; i++) {
        const data = await this.fetchHouseData('house', sigunguCd, bjdongCd, i);
        await this.housePermitInfoRepository.saveHouseData(data);
      }

      for (let i = 1; i <= totalPagesOfBuilding; i++) {
        const data = await this.fetchBuildingData(
          'building',
          sigunguCd,
          bjdongCd,
          i,
        );
        await this.buildingPermitInfoRepository.saveBuildingData(data);
      }
      return `${sigunguCd} ${bjdongCd} data well created`;
    } catch (error) {
      console.error('Error fetching or creating data:', error);
    }
  }

  private async fetchBuildingData(
    which: string,
    sigunguCd: string,
    bjdongCd: string,
    pageNo: number,
  ): Promise<any> {
    const url =
      'http://apis.data.go.kr/1613000/ArchPmsService_v2/getApBasisOulnInfo';

    const params = new URLSearchParams({
      serviceKey:
        'U6mE%2FsVh5ntHHu%2B1itc5F4n7G47gHusiLVHD1%2B5ofQfZBK8Vh%2BFw4ByUTXcW9Avf4O0MO%2BNTI3RTBn%2FRA4FGuQ%3D%3D',
      sigunguCd: sigunguCd,
      bjdongCd: bjdongCd,
      platGbCd: '0',
      numOfRows: '100',
      pageNo: pageNo.toString(),
    });

    const response = await firstValueFrom(
      this.httpService.get(`${url}?${params}`),
    );
    return response.data.response.body.items.item;
  }

  private async fetchHouseData(
    which: string,
    sigunguCd: string,
    bjdongCd: string,
    pageNo: number,
  ): Promise<any> {
    const url =
      'http://apis.data.go.kr/1611000/HsPmsService/getHpBasisOulnInfo';

    const params = new URLSearchParams({
      serviceKey:
        'U6mE%2FsVh5ntHHu%2B1itc5F4n7G47gHusiLVHD1%2B5ofQfZBK8Vh%2BFw4ByUTXcW9Avf4O0MO%2BNTI3RTBn%2FRA4FGuQ%3D%3D',
      sigunguCd: sigunguCd,
      bjdongCd: bjdongCd,
      platGbCd: '0',
      numOfRows: '100',
      pageNo: pageNo.toString(),
    });

    const response = await firstValueFrom(
      this.httpService.get(`${url}?${params}`),
    );
    return response.data.response.body.items.item;
  }

  async getBuildingDataAll() {
    return await this.buildingPermitInfoRepository.getAll();
  }

  async getHouseDataAll() {
    return await this.housePermitInfoRepository.getAll();
  }
}
