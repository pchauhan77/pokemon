// dbseed.ts
import { NestFactory } from '@nestjs/core';
import { DBseedModule } from './dbseeder.module'; // Adjust the path
import { DbseederService } from './dbseeder.service'; // Adjust the path

async function runSeeder() {
  const app = await NestFactory.createApplicationContext(DBseedModule);

  try {
    const dbSeedService = app.get(DbseederService);
    await dbSeedService.seedData();
    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await app.close();
  }
}

runSeeder();