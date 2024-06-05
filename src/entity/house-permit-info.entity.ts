import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('house-permit-info', {
  orderBy: {
    crtnDay: 'ASC',
  },
})
export class HousePermitInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: true })
  bldNm: string;

  @Column({ length: 200, nullable: true })
  splotNm: string;

  @Column({ length: 20, nullable: true })
  block: string;

  @Column({ length: 20, nullable: true })
  lot: string;

  @Column({ length: 5, nullable: true })
  purpsCd: string;

  @Column({ length: 100, nullable: true })
  purpsCdNm: string;

  @Column({ length: 2, nullable: true })
  strctCd: string;

  @Column({ length: 100, nullable: true })
  strctCdNm: string;

  @Column({ type: 'int', nullable: true })
  mainBldCnt: number;

  @Column({ type: 'decimal', precision: 19, scale: 9, nullable: true })
  totArea: number;

  @Column({ type: 'int', nullable: true })
  totHhldCnt: number;

  @Column({ length: 1, nullable: true })
  demolExtngGbCd: string;

  @Column({ length: 100, nullable: true })
  demolExtngGbCdNm: string;

  @Column({ length: 8, nullable: true })
  demolStrtDay: string;

  @Column({ length: 8, nullable: true })
  demolEndDay: string;

  @Column({ length: 8, nullable: true })
  demolExtngDay: string;

  @Column({ length: 8, nullable: true })
  apprvDay: string;

  @Column({ length: 8, nullable: true })
  stcnsSchedDay: string;

  @Column({ length: 8, nullable: true })
  stcnsDay: string;

  @Column({ length: 8, nullable: true })
  useInsptDay: string;

  @Column({ length: 8, nullable: true })
  useInsptSchedDay: string;

  @Column({ length: 8, nullable: true })
  crtnDay: string;

  @Column({ type: 'int', nullable: true })
  rnum: number;

  @Column({ length: 200, nullable: true })
  platPlc: string;

  @Column({ length: 5, nullable: false })
  sigunguCd: string;

  @Column({ length: 5, nullable: false })
  bjdongCd: string;

  @Column({ length: 1, nullable: true })
  platGbCd: string;

  @Column({ length: 4, nullable: true })
  bun: string;

  @Column({ length: 4, nullable: true })
  ji: string;

  @Column({ length: 33, nullable: false })
  mgmHsrgstPk: string;
}
