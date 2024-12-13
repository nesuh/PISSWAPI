"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DatabaseModule = exports.db = void 0;
var common_1 = require("@nestjs/common");
var node_postgres_1 = require("drizzle-orm/node-postgres");
var schema = require("./schemas");
exports.db = node_postgres_1.drizzle({
    connection: process.env.DATABASE_URL,
    schema: schema,
    casing: 'camelCase',
    logger: true
});
var DatabaseModule = /** @class */ (function () {
    function DatabaseModule() {
    }
    DatabaseModule = __decorate([
        common_1.Module({
            providers: [
                {
                    provide: 'DATABASE_CONNECTION',
                    useValue: exports.db
                },
            ],
            exports: ['DATABASE_CONNECTION']
        })
    ], DatabaseModule);
    return DatabaseModule;
}());
exports.DatabaseModule = DatabaseModule;
