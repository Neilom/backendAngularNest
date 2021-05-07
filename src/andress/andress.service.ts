import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAndressDto } from './dto/create-andress.dto';
import { UpdateAndressDto } from './dto/update-andress.dto';
import { Andress } from './entities/andress.entity';

@Injectable()
export class AndressService {
  constructor(
    @InjectRepository(Andress)
    private andressRepository: Repository<Andress>
  ) { }

  create(createAndressDto: CreateAndressDto) {
    try {
      this.andressRepository.save(createAndressDto)
    } catch (error) {
      console.log(error)
    } 
    return 
  }

  findAll() {
    return this.andressRepository.find()
  }

  findOne(id: number) {
    return this.andressRepository.findOne(id)
  }

  update(id: number, updateAndressDto: UpdateAndressDto) {
    return this.andressRepository.update(id, updateAndressDto)
  }

  remove(id: number) {
    return this.andressRepository.delete(id)
  }
}
