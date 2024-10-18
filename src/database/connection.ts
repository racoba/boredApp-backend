import { AppDataSource } from './data-source';

const connection = {
  async create() {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  },

  async close() {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  },

  async clear() {
    if (AppDataSource.isInitialized) {
      const entities = AppDataSource.entityMetadatas;

      for (const entity of entities) {
        const repository = AppDataSource.getRepository(entity.name);
        await repository.query(`DELETE FROM ${entity.tableName}`);
      }
    }
  },
};

export default connection;
