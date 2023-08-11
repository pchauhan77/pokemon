import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from '../entities/pokemon.entity';
import { Repository } from 'typeorm';
const xlsx = require('xlsx');
const path = require('path');
const filePath = path.join(__dirname, '../../PokemonGo.xlsx');
import { PokemonDto } from './pokemonDto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}
  async ReadData(page,limit): Promise<Pokemon[]> {
    try {
      const [data, total] = await this.pokemonRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
      });
      return data
    } catch (error) {
      console.log('Error reading XLSX file:', error);
    }
  }

  async CreateRecord(body): Promise<PokemonDto> {
    const insertData = await this.pokemonRepository.save(body);
    if (insertData) {
      return insertData;
    }
  }
  async updateRecord(body): Promise<any> {
    const name = body.Name;
    const updateResult = await this.pokemonRepository
      .createQueryBuilder()
      .update(Pokemon)
      .set(body)
      .where('Name = :name', { name }) // Use :name instead of :Name
      .execute();
    if (updateResult) {
      return updateResult;
    }
  }
  async delete(name): Promise<any> {
    const deleted = await this.pokemonRepository.delete({ Name: name });

    if (deleted.affected == 1) {
      return deleted.affected;
    }
    return 'unable to delete record';
  }
  async searchByName(querry): Promise<Pokemon[]> {
    const pokemons = await this.pokemonRepository
      .createQueryBuilder('pok')
      .where('pok.Name ILIKE :name', { name: `%${querry.name}%` }) 
      // .orWhere('pok.Weather1 ILIKE :weather1', { weather1: `%${querry.weather}%` })
      .getMany();
    
    return pokemons;
  }

  async searchbyWeather(querry): Promise<Pokemon[]> {
    const pokemons = await this.pokemonRepository
      .createQueryBuilder('pok')
      // .where('pok.Name ILIKE :name', { name: `%${querry.name}%` }) 
      .where('pok.Weather1 ILIKE :weather1', { weather1: `%${querry.weather}%` })
      .getMany();
    
    return pokemons;
  }



}
