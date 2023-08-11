import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pokemon } from "../entities/pokemon.entity";
import { Repository } from "typeorm";
const xlsx = require('xlsx');
const path = require('path');
const filePath = path.join(__dirname, '../../PokemonGo.xlsx'); // Adjust the path as needed


@Injectable()
export class DbseederService {
    constructor(
        @InjectRepository(Pokemon) private readonly PokemonRepository: Repository<Pokemon>,
      ) {}
    // constructor(){}
    async seedData():Promise<any>  {
      try {
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
        const sheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(sheet);
      const rowData = [];
      jsonData.forEach(element => {
           const formattedRow = {
            'Name': element['Name'],
            'PokedexNumber': element['Pokedex Number'],
            'ImgName': element['Img name'],
            'Generation': element['Generation'],
            'EvolutionStage': element['Evolution Stage'],
            'Evolved': element['Evolved'],
            'FamilyID': element['FamilyID'],
            'CrossGen': element['Cross Gen'],
            'Type1': element['Type 1'],
            'Type2': element['Type 2'],
            'Weather1': element['Weather 1'],
            'Weather2': element['Weather 2'],
            'statTOTAL': element['STAT TOTAL'],
            'ATK': element['ATK'],
            'DEF': element['DEF'],
            'STA': element['STA'],
            'Legendary': element['Legendary'],
            'Aquireable': element['Aquireable'],
            'Spawns': element['Spawns'],
            'Regional': element['Regional'],
            'Raidable': element['Raidable'],
            'Hatchable': element['Hatchable'],
            'Shiny': element['Shiny'],
            'Nest': element['Nest'],
            'New': element['New'],
            'NotGettable': element['Not-Gettable'],
            'FutureEvolve': element['Future Evolve'],
            '100% CP @ 40': element['100% CP @ 40'],
            '100% CP @ 39': element['100% CP @ 39']
        };
        rowData.push(formattedRow);
      });
    
      const data = await this.PokemonRepository.save(rowData)
        // console.log('Cell A1 value:', cellValue);
        if(data)
        {
          console.log('data seed successfully')
        }
        else{
          console.log('unable to seed the data')
        }
      } catch (error) {
        console.error('Error reading XLSX file:', error);
      }
    
      }




}