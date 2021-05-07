import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Pessoa } from '../../pessoa/entities/pessoa.entity'


@Entity()
export class Andress {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  street:string

  @Column()
  num: number

  @Column()
  complement:string

  @Column()
  state: string

  @Column()
  city:string

  @OneToOne(type => Pessoa)
  @JoinColumn()
  pessoa: Pessoa
}
