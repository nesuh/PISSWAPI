import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { audit } from "src/shared/schemas/audit.scheam";

export const users = pgTable('users', {
    id: uuid().primaryKey().defaultRandom(),
    email: varchar({ length: 100 }).unique(),
    phoneNumber: varchar({ length: 100 }).notNull().unique(),
    password: varchar({ length: 100 }).notNull(),
    firstName: varchar({ length: 100 }).notNull(),
    lastName: varchar({ length: 100 }).notNull(),
    baptismName: varchar({ length: 100 }),
    ...audit
})
