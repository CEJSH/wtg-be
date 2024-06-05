import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('building-permit-info', {
  orderBy: {
    crtnDay: 'ASC',
  },
})
export class BuildingPermitInfoEntity {
  @PrimaryColumn({ length: 33, default: 'NoData' })
  mgmPmsrgstPk: string;

  @Column({ length: 100, nullable: true })
  guyukCdNm: string;

  @Column({ length: 2, nullable: true })
  jimokCd: string;

  @Column({ length: 6, nullable: true })
  jiyukCd: string;

  @Column({ length: 6, nullable: true })
  jiguCd: string;

  @Column({ length: 6, nullable: true })
  guyukCd: string;

  @Column({ length: 10, nullable: true })
  archGbCdNm: string;

  @Column({ length: 100, nullable: true })
  archGbCd: string;

  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  platArea: number;

  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  archArea: number;

  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  bcRat: number;

  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  totArea: number;

  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  vlRatEstmTotArea: number;

  @Column('decimal', { precision: 19, scale: 9, nullable: true })
  vlRat: number;

  @Column({ type: 'int', nullable: true })
  mainBldCnt: number;

  @Column({ type: 'int', nullable: true })
  atchBldDongCnt: number;

  @Column({ length: 5, nullable: true })
  mainPurpsCd: string;

  @Column({ length: 100, nullable: true })
  mainPurpsCdNm: string;

  @Column({ type: 'int', nullable: true })
  hhldCnt: number;

  @Column({ type: 'int', nullable: true })
  hoCnt: number;

  @Column({ type: 'int', nullable: true })
  fmlyCnt: number;

  @Column({ type: 'int', nullable: true })
  totPkngCnt: number;

  @Column({ length: 8, nullable: true })
  stcnsSchedDay: string;

  @Column({ length: 8, nullable: true })
  stcnsDelayDay: string;

  @Column({ length: 8, nullable: true })
  realStcnsDay: string;

  @Column({ length: 8, nullable: true })
  archPmsDay: string;

  @Column({ length: 8, nullable: true })
  useAprDay: string;

  @Column({ length: 8, nullable: true })
  crtnDay: string;

  @Column({ type: 'int', nullable: true })
  rnum: number;

  @Column({ length: 200, nullable: true })
  platPlc: string;

  @Column({ length: 5, nullable: true })
  sigunguCd: string;

  @Column({ length: 5, nullable: true })
  bjdongCd: string;

  @Column({ length: 1, nullable: true })
  platGbCd: string;

  @Column({ length: 4, nullable: true })
  bun: string;

  @Column({ length: 4, nullable: true })
  ji: string;

  @Column({ length: 100, nullable: true })
  bldNm: string;

  @Column({ length: 200, nullable: true })
  splotNm: string;

  @Column({ length: 20, nullable: true })
  block: string;

  @Column({ length: 20, nullable: true })
  lot: string;

  @Column({ length: 100, nullable: true })
  jimokCdNm: string;

  @Column({ length: 100, nullable: true })
  jiyukCdNm: string;

  @Column({ length: 100, nullable: true })
  jiguCdNm: string;
}
