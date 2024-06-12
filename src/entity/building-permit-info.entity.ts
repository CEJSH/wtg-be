import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('building-permit-info', {
  orderBy: {
    crtnDay: 'ASC',
  },
})
export class BuildingPermitInfoEntity {
  @ApiProperty({ description: 'id', type: 'string' })
  @PrimaryColumn({
    length: 33,
    default: 'NoData',
  })
  mgmPmsrgstPk: string;

  @ApiProperty({ description: '시군구코드', type: 'string' })
  @Column({ length: 5, nullable: true })
  sigunguCd: string;

  @ApiProperty({ description: '법정동코드', type: 'string' })
  @Column({ length: 5, nullable: true })
  bjdongCd: string;

  @ApiProperty({ description: '대지위치', type: 'string' })
  @Column({ length: 200, nullable: true })
  platPlc: string;

  @ApiProperty({ description: '건물명', type: 'string' })
  @Column({ length: 100, nullable: true })
  bldNm: string;

  @ApiProperty({ description: '착공예정일', type: 'string' })
  @Column({ length: 8, nullable: true })
  stcnsSchedDay: string;

  @ApiProperty({ description: '착공연기일', type: 'string' })
  @Column({ length: 8, nullable: true })
  stcnsDelayDay: string;

  @ApiProperty({ description: '실제착공일', type: 'string' })
  @Column({ length: 8, nullable: true })
  realStcnsDay: string;

  @ApiProperty({ description: '건축허가일', type: 'string' })
  @Column({ length: 8, nullable: true })
  archPmsDay: string;

  @ApiProperty({ description: '사용승인일', type: 'string' })
  @Column({ length: 8, nullable: true })
  useAprDay: string;

  // @ApiProperty({ description: '구역코드' })
  // @Column({ length: 100, nullable: true })
  // guyukCdNm: string;

  // @ApiProperty({ description: '지목코드' })
  // @Column({ length: 2, nullable: true })
  // jimokCd: string;

  // @ApiProperty({ description: '지역코드' })
  // @Column({ length: 6, nullable: true })
  // jiyukCd: string;

  // @ApiProperty({ description: '지구코드' })
  // @Column({ length: 6, nullable: true })
  // jiguCd: string;

  // @ApiProperty({ description: '구역코드' })
  // @Column({ length: 6, nullable: true })
  // guyukCd: string;

  @ApiProperty({ description: '건축구분코드', type: 'string' })
  @Column({ length: 10, nullable: true })
  archGbCdNm: string;

  @ApiProperty({ description: '건축구분코드명', type: 'string' })
  @Column({ length: 100, nullable: true })
  archGbCd: string;

  @ApiProperty({ description: '대지면적(m2)', type: 'number' })
  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  platArea: number;

  @ApiProperty({ description: '건축면적(m2)', type: 'number' })
  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  archArea: number;

  @ApiProperty({ description: '건폐율(%)', type: 'number' })
  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  bcRat: number;

  @ApiProperty({ description: '연면적(m2)', type: 'number' })
  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  totArea: number;

  @ApiProperty({ description: '용적률산정연면적(m2)', type: 'number' })
  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  vlRatEstmTotArea: number;

  @ApiProperty({ description: '용적률(%)', type: 'number' })
  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  vlRat: number;

  // @ApiProperty({ description: '주건축물수' })
  // @Column({ type: 'int', nullable: true })
  // mainBldCnt: number;

  // @ApiProperty({ description: '부속건축물동수' })
  // @Column({ type: 'int', nullable: true })
  // atchBldDongCnt: number;

  @ApiProperty({ description: '주용도코드' })
  @Column({ length: 5, nullable: true })
  mainPurpsCd: string;

  @ApiProperty({ description: '주용도코드명' })
  @Column({ length: 100, nullable: true })
  mainPurpsCdNm: string;

  // @ApiProperty({ description: '세대수(세대)' })
  // @Column({ type: 'int', nullable: true })
  // hhldCnt: number;

  // @ApiProperty({ description: '호수(호)' })
  // @Column({ type: 'int', nullable: true })
  // hoCnt: number;

  // @ApiProperty({ description: '가구수(가구)' })
  // @Column({ type: 'int', nullable: true })
  // fmlyCnt: number;

  // @ApiProperty({ description: '총주차수' })
  // @Column({ type: 'int', nullable: true })
  // totPkngCnt: number;

  @ApiProperty({ description: '생성일자', type: 'string' })
  @Column({ length: 8, nullable: true })
  crtnDay: string;

  @ApiProperty({ description: '순번', type: 'number' })
  @Column({ type: 'int', nullable: true })
  rnum: number;

  // @ApiProperty({ description: '대지구분코드' })
  // @Column({ length: 1, nullable: true })
  // platGbCd: string;

  // @ApiProperty({ description: '번' })
  // @Column({ length: 4, nullable: true })
  // bun: string;

  // @ApiProperty({ description: '지' })
  // @Column({ length: 4, nullable: true })
  // ji: string;

  // @ApiProperty({ description: '특수지명' })
  // @Column({ length: 200, nullable: true })
  // splotNm: string;

  // @ApiProperty({ description: '블록' })
  // @Column({ length: 20, nullable: true })
  // block: string;

  // @ApiProperty({ description: '로트' })
  // @Column({ length: 20, nullable: true })
  // lot: string;

  // @ApiProperty({ description: '지목코드명' })
  // @Column({ length: 100, nullable: true })
  // jimokCdNm: string;

  // @ApiProperty({ description: '지역코드명' })
  // @Column({ length: 100, nullable: true })
  // jiyukCdNm: string;

  // @ApiProperty({ description: '지구코드명' })
  // @Column({ length: 100, nullable: true })
  // jiguCdNm: string;
}
