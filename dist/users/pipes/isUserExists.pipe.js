"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUserExistsPipe = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users.service");
const userDoesNotExist_exception_1 = require("../exceptions/userDoesNotExist.exception");
const core_1 = require("@nestjs/core");
let IsUserExistsPipe = class IsUserExistsPipe {
    constructor(userService, request) {
        this.userService = userService;
        this.request = request;
    }
    async transform(value, metadata) {
        const user = await this.userService.findOneById(value);
        if (!user) {
            throw new userDoesNotExist_exception_1.UserDoesNotExistException();
        }
        return user;
    }
};
IsUserExistsPipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(1, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [users_service_1.UsersService, Object])
], IsUserExistsPipe);
exports.IsUserExistsPipe = IsUserExistsPipe;
//# sourceMappingURL=isUserExists.pipe.js.map