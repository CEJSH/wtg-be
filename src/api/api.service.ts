import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { BuildingPermitInfoRepository } from 'src/repository/building-permit-info.repository';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class ApiService {
  constructor(
    private buildingPermitInfoRepository: BuildingPermitInfoRepository,
    private readonly httpService: HttpService,
    private dataSource: DataSource,
  ) {}

  // 해당 시군구 법정동 데이터 양을 파악 : totalCount 리턴
  async getTotalCount(sigunguCd: string, bjdongCd: string): Promise<any> {
    const url =
      'http://apis.data.go.kr/1613000/ArchPmsService_v2/getApBasisOulnInfo';
    const queryParams =
      '?' +
      encodeURIComponent('serviceKey') +
      '=U6mE%2FsVh5ntHHu%2B1itc5F4n7G47gHusiLVHD1%2B5ofQfZBK8Vh%2BFw4ByUTXcW9Avf4O0MO%2BNTI3RTBn%2FRA4FGuQ%3D%3D' +
      '&' +
      encodeURIComponent('sigunguCd') +
      '=' +
      encodeURIComponent(sigunguCd) +
      '&' +
      encodeURIComponent('bjdongCd') +
      '=' +
      encodeURIComponent(bjdongCd);

    const response = await firstValueFrom(
      this.httpService.get(`${url}${queryParams}`),
    );
    console.log(response.data.response.body.totalCount);
    const data = response.data.response.body.totalCount;
    return data;
  }

  // 해당 시군구 법정동 데이터 생성 밑 저장
  async createData(
    sigunguCd: string,
    bjdongCd: string,
    entityManager?: EntityManager,
  ): Promise<any> {
    try {
      const startTime = Date.now();
      const theTotalCountOfBuilding: number = await this.getTotalCount(
        sigunguCd,
        bjdongCd,
      );
      const totalPagesOfBuilding = Math.ceil(theTotalCountOfBuilding / 100);
      console.log('totalPages->', totalPagesOfBuilding, totalPagesOfBuilding);

      for (let i = 1; i <= totalPagesOfBuilding; i++) {
        const data = await this.fetchBuildingData(sigunguCd, bjdongCd, i);
        await this.buildingPermitInfoRepository.saveBuildingData(data);
      }
      const endTime = Date.now();
      // 걸린 시간 계산 (밀리초 단위)
      const timeTakenMs = endTime - startTime;
      // 시간 변환 (분, 초, 밀리초)
      const timeTaken = this.convertMsToTime(timeTakenMs);
      return `${sigunguCd} ${bjdongCd} data well created takenTime:${timeTaken}`;
    } catch (error) {
      console.error('Error fetching or creating data:', error);
    }
  }
  private convertMsToTime(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(2);
    return `${minutes} minutes and ${seconds} seconds`;
  }
  private async fetchBuildingData(
    sigunguCd: string,
    bjdongCd: string,
    pageNo: number,
  ): Promise<any> {
    const url =
      'http://apis.data.go.kr/1613000/ArchPmsService_v2/getApBasisOulnInfo';
    const queryParams =
      '?' +
      encodeURIComponent('serviceKey') +
      '=U6mE%2FsVh5ntHHu%2B1itc5F4n7G47gHusiLVHD1%2B5ofQfZBK8Vh%2BFw4ByUTXcW9Avf4O0MO%2BNTI3RTBn%2FRA4FGuQ%3D%3D' +
      '&' +
      encodeURIComponent('sigunguCd') +
      '=' +
      encodeURIComponent(sigunguCd) +
      '&' +
      encodeURIComponent('bjdongCd') +
      '=' +
      encodeURIComponent(bjdongCd) +
      '&' +
      encodeURIComponent('numOfRows') +
      '=' +
      encodeURIComponent('100') +
      '&' +
      encodeURIComponent('pageNo') +
      '=' +
      encodeURIComponent(pageNo);

    const response = await firstValueFrom(
      this.httpService.get(`${url}${queryParams}`),
    );

    return response.data.response.body.items.item;
  }
}
