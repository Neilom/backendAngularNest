import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Andress } from 'src/andress/entities/andress.entity';
import { Pessoa } from 'src/pessoa/entities/pessoa.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'teste1',
    entities: [Pessoa, Andress],
    synchronize:true,
  })]
})
export class DatabaseModule { }
