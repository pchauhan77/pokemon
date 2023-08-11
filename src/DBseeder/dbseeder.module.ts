import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PokemonController } from '../DBseeder/';
import { DbseederService } from './dbseeder.service';
require('dotenv').config();

import { Pokemon } from '../entities/pokemon.entity';
@Module({
  imports: [ TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "postgres_db",
    "port": 5432,
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": [
      Pokemon
    ],
    "synchronize": true,
  }),TypeOrmModule.forFeature([Pokemon])],
  providers: [DbseederService],
})
export class DBseedModule {}