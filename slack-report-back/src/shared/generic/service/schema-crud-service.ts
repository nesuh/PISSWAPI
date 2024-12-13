import { Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import * as schemas from 'src/db/schemas'

@Injectable()
export class SchemaCrudService {
    constructor(
        protected readonly db: NodePgDatabase<typeof schemas>,
        private readonly schema: PgTableWithColumns<any>
    ) {
    }

    async findAll() {
        return await this.db.select().from(this.schema);
    }

    async findOne(id: string) {
        return await this.db.select()
            .from(this.schema)
            .where(eq(this.schema.id, id));
    }

    async create(itemData: any) {
        return await this.db.insert(this.schema).values(itemData).returning();
    }

    async update(id: string, itemData: any) {
        return await this.db.update(this.schema).set(itemData).where(eq(this.schema.id, id));
    }

    async delete(id: string) {
        return await this.db.delete(this.schema).where(eq(this.schema.id, id));
    }
}