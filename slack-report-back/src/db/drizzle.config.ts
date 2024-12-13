import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './src/db/migrations',
    schema: './src/db/schemas',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
});

// (async function migrateDatabase() {
//     Logger.log('Migration started');
//     await migrate(db, {
//         migrationsSchema: "drizzle",
//         migrationsTable: "__drizzle_migrations",
//         migrationsFolder: process.cwd() + '/src/db/migrations',
//     });
//     Logger.log('🛩️  Migrations ran successfully');
//     Logger.debug(`${process.env.BASE_URL}:${process.env.PORT ?? 3000}/api`, 'Swagger Docs');
// })();


