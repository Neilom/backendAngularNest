import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  sex: string

  @Column()
  birth_date:string

  @Column()
  civil_state:string
}
