import { Module } from '@nestjs/common';
import { AndressService } from './andress.service';
import { AndressController } from './andress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Andress } from './entities/andress.entity';

@Module({
  controllers: [AndressController],
  imports: [TypeOrmModule.forFeature([Andress])],
  providers: [AndressService]
})
export class AndressModule {}
