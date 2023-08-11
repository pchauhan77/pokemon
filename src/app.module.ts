import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonModule } from './PokemonGoModule/pokemon.module';
require('dotenv').config();
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
  }),PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
