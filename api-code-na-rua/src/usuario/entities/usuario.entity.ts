import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  login!: string;
}
