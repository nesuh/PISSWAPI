"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SlackModule = void 0;
var common_1 = require("@nestjs/common");
var slack_service_1 = require("./service/slack.service");
var slack_controller_1 = require("./controller/slack.controller");
var database_module_1 = require("src/db/database.module");
var SlackModule = /** @class */ (function () {
    function SlackModule() {
    }
    SlackModule = __decorate([
        common_1.Module({
            imports: [database_module_1.DatabaseModule],
            providers: [slack_service_1.SlackService],
            controllers: [slack_controller_1.SlackController],
            exports: []
        })
    ], SlackModule);
    return SlackModule;
}());
exports.SlackModule = SlackModule;
