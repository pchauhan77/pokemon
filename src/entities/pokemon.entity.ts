// src/pokemon/pokemon.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    nullable: true,
  })
  Name: string;

  @Column({
    nullable: true,
  })
  PokedexNumber: string;

  @Column({
    nullable: true,
  })
  Generation: string;
  @Column({
    nullable: true,
  })
  EvolutionStage: string;
  @Column({
    nullable: true,
  })
  Evolved: string;
  @Column({
    nullable: true,
  })
  CrossGen: string;
  @Column({
    nullable: true,
  })
  Type1: string;
  @Column({
    nullable: true,
  })
  Type2: string;
  @Column({
    nullable: true,
  })
  Weather1: string;
  @Column({
    nullable: true,
  })
  Weather2: string;
  @Column({
    nullable: true,
  })
  statTOTAL: string;
  @Column({
    nullable: true,
  })
  ATK: string;
  @Column({
    nullable: true,
  })
  DEF: string;
  @Column({
    nullable: true,
  })
  STA: string;
  @Column({
    nullable: true,
  })
  Legendary: string;
  @Column({
    nullable: true,
  })
  Aquireable: string;
  @Column({
    nullable: true,
  })
  Spawns: string;
  @Column({
    nullable: true,
  })
  Regional: string;
  @Column({
    nullable: true,
  })
  Raidable: string;
  @Column({
    nullable: true,
  })
  Hatchable: string;
  @Column({
    nullable: true,
  })
  Shiny: string;
  @Column({
    nullable: true,
  })
  Nest: string;
  @Column({
    nullable: true,
  })
  New: string;
  @Column({
    nullable: true,
  })
  NotGettable: string;
  @Column({
    nullable: true,
  })
  FutureEvolve: string;
  @Column({
    nullable: true,
  })
  '100% CP @ 40': string;
  @Column({
    nullable: true,
  })
  '100% CP @ 39': string;
  @Column({
    nullable: true,
  })
  ImgName: string;
}
