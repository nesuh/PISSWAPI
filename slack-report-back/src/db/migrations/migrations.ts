import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Logger } from '@nestjs/common';
import { db } from '../database.module';

(async function migrateDatabase() {
    Logger.log('Migration started');
    await migrate(db, {
        migrationsSchema: 'drizzle',
        migrationsTable: '__drizzle_migrations',
        migrationsFolder: process.cwd() + '/src/db/migrations',
    });
    Logger.log('🛩️  Migrations ran successfully');
})();
