import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pokemon } from '../entities/pokemon.entity';

describe('PokemonService', () => {
  let service: PokemonService;
  let repositoryMock: any;

  beforeEach(async () => {
    repositoryMock = {
      find: jest.fn(),
      save: jest.fn(),
      createQueryBuilder: jest.fn(() => ({
        update: jest.fn().mockReturnThis(),
        set: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        execute: jest.fn(),
      })),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: getRepositoryToken(Pokemon),
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
  });

  describe('ReadData', () => {
    it('should return Pokemon data', async () => {
      const testData = [{
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
    }];
      repositoryMock.find.mockResolvedValue(testData);

      const result = await service.ReadData();

      expect(result).toEqual(testData);
    });

  });
//   describe('updateRecord', () => {
//     it('should update a Pokemon record', async () => {
//       const testData = {
//         Name: "Pikachu",
//         "PokedexNumber": "025",
//         "Generation": "1",
//         "EvolutionStage": "Final",
//         "Evolved": "Yes",
//         "CrossGen": "No",
//         "Type1": "Electric",
//         "Type2": null,
//         "Weather1": "Clear",
//         "Weather2": null,
//         "statTOTAL": "300",
//         "ATK": "100",
//         "DEF": "90",
//         "STA": "110",
//         "Legendary": "No",
//         "Aquireable": "Yes",
//         "Spawns": "Yes",
//         "Regional": "No",
//         "Raidable": "Yes",
//         "Hatchable": "Yes",
//         "Shiny": "Yes",
//         "Nest": "No",
//         "New": "No",
//         "NotGettable": "No",
//         "FutureEvolve": "Yes",
//         "100% CP @ 40": "5000",
//         "100% CP @ 39": "4900",
//         "ImgName": null,
//         "id": 9877
//     };
//       repositoryMock.createQueryBuilder().execute.mockResolvedValue({});

//       const result = await service.updateRecord(testData);

//       expect(result).toEqual({});
//       expect(repositoryMock.createQueryBuilder().update).toHaveBeenCalledWith(Pokemon);
//     });

//   });
  describe('delete', () => {
    it('should delete a Pokemon record', async () => {
      const nameToDelete = 'Pikachu';
      repositoryMock.delete.mockResolvedValue({ affected: 1 });

      const result = await service.delete(nameToDelete);

      expect(result).toEqual(1);
      expect(repositoryMock.delete).toHaveBeenCalledWith({ Name: nameToDelete });
    });

    it('should handle record not found', async () => {
      repositoryMock.delete.mockResolvedValue({ affected: 0 });

      try {
        await service.delete('NonExistentPokemon');
      } catch (error) {
        expect(error).toEqual('unable to delete record');
      }
    });

  });
  describe('CreateRecord', () => {
    it('should create a new Pokemon record', async () => {
      const testData = {
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
      repositoryMock.save.mockResolvedValue(testData);

      const result = await service.CreateRecord(testData);

      expect(result).toEqual(testData);
    });

  });
});



  