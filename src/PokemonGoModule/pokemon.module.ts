import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PokemonController } from './Pokemon.controller';
import { PokemonService } from './pokemon.service';

import { Pokemon } from '../entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}