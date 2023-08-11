

Project Structure

# PokemonGo
└─ src
   ├─ DBseeder
   │   └─ (DB seeder files)
   │
   ├─ entities
   │   └─ (TypeORM entity files)
   │
   ├─ PokemonGoModule
   │   ├─ controllers
   │   │   └─ (NestJS controllers related to PokemonGo module)
   │   │   └─ SpecController.ts
   │   │
   │   ├─ services
   │   │   └─ (NestJS services related to PokemonGo module)
   │   │   └─ SpecService.ts
   │   │
   │   ├─ modules
   │   │   └─ (Submodules or feature modules of PokemonGo module)
   │   │
   │   └─ (Other files related to PokemonGo module)
   │
   └─ main.ts (NestJS application entry point)

Prerequisites:
Before you start, ensure you have the following:
Node.js and npm: Install Node.js <= 16 and npm on your machine.

Getting Started:

Follow these steps to set up and run your NestJS application using Docker
Clone the Repository:git clone remote-origin-url

Install Dependencies:

Navigate to your application's directory
cd path/to/your/nestjs/app
npm install

to seed the data from the file to database
npm run seed:db 

Create PostgreSQL Database:

Create a PostgreSQL database named "PokemonGO" in your PostgreSQL instance.

Build the Application:
npm run build

docker-compose up -d

Access the Application:

Your NestJS application is now running in a Docker container. Access it by opening a web browser and navigating to http://localhost:3000.


