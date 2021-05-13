import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>
  ) { }

  async create(createPessoaDto: CreatePessoaDto) {
    return await this.pessoaRepository.save(createPessoaDto)
  }

  async findAll(): Promise<Pessoa[]> {
    return await this.pessoaRepository.find({order:{name:"ASC"}})
  }

  async findOne(id: number) {
    return await this.pessoaRepository.findOne(id)
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return await this.pessoaRepository.update(id, updatePessoaDto)
  }

  async remove(id: number) {
    try {
    return await this.pessoaRepository.delete(id)
    } catch (error) {
      if(error.constraint == 'FK_f46d2ac3b0820403c7e5582e601'){
        throw new ConflictException("Necessário deletar os endereços")
      } else {
        throw error
      }
    }
  }
}
