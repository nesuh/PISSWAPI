"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.SlackService = void 0;
var common_1 = require("@nestjs/common");
var service_1 = require("src/shared/generic/service");
var schemas = require("src/db/schemas");
var SlackService = /** @class */ (function (_super) {
    __extends(SlackService, _super);
    function SlackService(db) {
        var _this = _super.call(this, db, schemas.users, 'parentFieldName') || this;
        _this.db = db;
        return _this;
    }
    SlackService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject('DATABASE_CONNECTION'))
    ], SlackService);
    return SlackService;
}(service_1.ExtraCrudService));
exports.SlackService = SlackService;
