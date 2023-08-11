import {
  Controller,
  Get,
  Post,
  Patch,
  Request,
  Response,
  Body,
  HttpException,
  HttpStatus,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller()
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('/')
  async Index(): Promise<any | HttpException> {
    return 'Hello World';
  }
  @Post('/create')
  async createRecord(
    @Request() request,
    @Response() response,
    @Body() body,
  ): Promise<any | HttpException> {
    const isCreated = await this.pokemonService.CreateRecord(body);
    if (isCreated) {
      response.status(200).json(isCreated);
    }
    else
    {

      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Unable to create record',
          error: 'Not created',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Get('/read')
  async getRecord(
    @Request() request,
    @Response() response,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<any | HttpException> {
    const DBdata = await this.pokemonService.ReadData(page,limit);
    if (DBdata) {
      response.status(200).json(DBdata);
    }
    throw new HttpException(
      {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Resource not found',
        error: 'Not Found',
      },
      HttpStatus.NOT_FOUND,
    );
  }
  @Patch('/update')
  async updateRecord(
    @Request() request,
    @Response() response,
    @Body() body,
  ): Promise<any | HttpException> {
    const updatedResult = await this.pokemonService.updateRecord(body);
    if (updatedResult) {
      response.status(200).json(updatedResult);
    }
    throw new HttpException(
      {
        statusCode: HttpStatus.CONFLICT,
        message: 'unable to update',
        error: 'error',
      },
      HttpStatus.CONFLICT,
    );
  }

  @Delete('/delete/:name')
  async toDelete(
    @Request() request,
    @Response() response,
    @Param() Param,
  ): Promise<any | HttpException> {
    console.log(Param.name, 'is name');
    const Isdeleted = await this.pokemonService.delete(Param.name);
    if (Isdeleted == 1) {
      response.status(200).json(Isdeleted);
    }
    throw new HttpException(
      {
        statusCode: HttpStatus.CONFLICT,
        message: 'unable to delete',
        error: 'record not found',
      },
      HttpStatus.BAD_REQUEST,
    );
  }


  @Get('/search/name/:name')
  async searchByName(@Param() input): Promise<any> {
    console.log(input)
    const pokemons = await this.pokemonService.searchByName(input);

    return pokemons;
  }

  @Get('/search/weather/:weather')
  async weatherSearch(@Param() input): Promise<any> {
    console.log(input,'........')
    const pokemons = await this.pokemonService.searchbyWeather(input);

    return pokemons;
  }

}
