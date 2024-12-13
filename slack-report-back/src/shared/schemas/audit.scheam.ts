import { timestamp } from "drizzle-orm/pg-core";

export const audit = {
    updatedAt: timestamp(),
    createdAt: timestamp().defaultNow().notNull(),
    deletedAt: timestamp(),
}