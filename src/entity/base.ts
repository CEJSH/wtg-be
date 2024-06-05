import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Base extends BaseEntity {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: '생성일' })
  @CreateDateColumn({ select: false })
  createdAt: Date;

  @ApiProperty({ description: '수정일' })
  @UpdateDateColumn({ select: false })
  updatedAt: Date;

  @ApiProperty({ description: '삭제일' })
  @DeleteDateColumn({ nullable: true, select: false })
  leftAt?: Date;
}
