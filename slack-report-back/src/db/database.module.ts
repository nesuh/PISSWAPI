import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schemas';

export const db = drizzle({
    connection: process.env.DATABASE_URL!,
    schema: schema,
    casing: 'camelCase',
    logger: true,
});

@Module({
    providers: [
        {
            provide: 'DATABASE_CONNECTION',
            useValue: db,
        },
    ],
    exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}