import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, HttpException } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            CreateRecord: jest.fn(),
            ReadData: jest.fn(),
            updateRecord: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  describe('createRecord', () => {
    it('should create a record and return it', async () => {
      const requestBody = {
        "Name": "Pikachu",
        "PokedexNumber": "025",
        "Generation": "1",
        "EvolutionStage": "Final",
        "Evolved": "Yes",
        "CrossGen": "No",
        "Type1": "Electric",
        "Type2": null,
        "Weather1": "Clear",
        "Weather2": null,
        "statTOTAL": "300",
        "ATK": "100",
        "DEF": "90",
        "STA": "110",
        "Legendary": "No",
        "Aquireable": "Yes",
        "Spawns": "Yes",
        "Regional": "No",
        "Raidable": "Yes",
        "Hatchable": "Yes",
        "Shiny": "Yes",
        "Nest": "No",
        "New": "No",
        "NotGettable": "No",
        "FutureEvolve": "Yes",
        "100% CP @ 40": "5000",
        "100% CP @ 39": "4900"
      }
      const createdRecord = {
        "Name": "Pikachu",
        "PokedexNumber": "025",
        "Generation": "1",
        "EvolutionStage": "Final",
        "Evolved": "Yes",
        "CrossGen": "No",
        "Type1": "Electric",
        "Type2": null,
        "Weather1": "Clear",
        "Weather2": null,
        "statTOTAL": "300",
        "ATK": "100",
        "DEF": "90",
        "STA": "110",
        "Legendary": "No",
        "Aquireable": "Yes",
        "Spawns": "Yes",
        "Regional": "No",
        "Raidable": "Yes",
        "Hatchable": "Yes",
        "Shiny": "Yes",
        "Nest": "No",
        "New": "No",
        "NotGettable": "No",
        "FutureEvolve": "Yes",
        "100% CP @ 40": "5000",
        "100% CP @ 39": "4900",
        "ImgName": null,
        "id": 9877
    }

      service.CreateRecord = jest.fn().mockResolvedValue(createdRecord);

      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.createRecord(null, response, requestBody);

      expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
      expect(response.json).toHaveBeenCalledWith(createdRecord);
    });

    it('should throw an HttpException if record creation fails', async () => {
      const requestBody = { a:1,b:2,c:3 };

      service.CreateRecord = jest.fn().mockResolvedValue(null);

      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      try {
        await controller.createRecord(null, response, requestBody);
      } catch (error) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.getStatus()).toBe(HttpStatus.BAD_REQUEST);
      }
    });
  });

  // Repeat similar tests for other controller methods (getRecord, updateRecord, toDelete)
});
