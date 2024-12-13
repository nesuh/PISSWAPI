"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.users = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
var audit_scheam_1 = require("src/shared/schemas/audit.scheam");
exports.users = pg_core_1.pgTable('users', __assign({ id: pg_core_1.uuid().primaryKey().defaultRandom(), email: pg_core_1.varchar({ length: 100 }).unique(), phoneNumber: pg_core_1.varchar({ length: 100 }).notNull().unique(), password: pg_core_1.varchar({ length: 100 }).notNull(), firstName: pg_core_1.varchar({ length: 100 }).notNull(), lastName: pg_core_1.varchar({ length: 100 }).notNull(), baptismName: pg_core_1.varchar({ length: 100 }) }, audit_scheam_1.audit));
