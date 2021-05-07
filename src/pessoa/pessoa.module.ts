import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';

@Module({
  controllers: [PessoaController],
  imports: [TypeOrmModule.forFeature([Pessoa])],
  providers: [PessoaService]
})
export class PessoaModule {}
