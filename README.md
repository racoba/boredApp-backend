# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command



Comandos de ajuda

npm run typeorm migration:create src/database/migrations/NOMEDAMIGRATION

npm run typeorm migration:generate ./src/database/migrations/NOMEDOARQUIVO -- -d ./src/database/data-source.ts