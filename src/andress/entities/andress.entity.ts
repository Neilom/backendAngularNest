import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToMany, OneToMany, ManyToOne } from 'typeorm'
import { Pessoa } from '../../pessoa/entities/pessoa.entity'


@Entity()
export class Andress {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  cep:string

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

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.id)
  @JoinColumn()
  pessoa: Pessoa
}
