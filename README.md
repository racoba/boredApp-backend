# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command



Helpers

npm run typeorm migration:create src/database/migrations/NOMEDAMIGRATION (MIGRATION EM BRANCO)

npm run typeorm migration:generate ./src/database/migrations/NOMEDOARQUIVO -- -d ./src/database/data-source.ts