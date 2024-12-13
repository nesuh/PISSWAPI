"use strict";
exports.__esModule = true;
exports.audit = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.audit = {
    updatedAt: pg_core_1.timestamp(),
    createdAt: pg_core_1.timestamp().defaultNow().notNull(),
    deletedAt: pg_core_1.timestamp()
};
