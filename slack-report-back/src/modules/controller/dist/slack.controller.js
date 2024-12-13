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
exports.__esModule = true;
exports.SlackController = void 0;
var common_1 = require("@nestjs/common");
var controller_1 = require("src/shared/generic/controller");
var swagger_1 = require("@nestjs/swagger");
var SlackController = /** @class */ (function (_super) {
    __extends(SlackController, _super);
    function SlackController(slackService) {
        var _this = _super.call(this, slackService) || this;
        _this.slackService = slackService;
        return _this;
    }
    SlackController = __decorate([
        common_1.Controller('users'),
        swagger_1.ApiTags('Users')
        // @ApiHeader({ name: "x-api-key" })
        ,
        swagger_1.ApiBearerAuth()
    ], SlackController);
    return SlackController;
}(controller_1.ExtraCrudController));
exports.SlackController = SlackController;
