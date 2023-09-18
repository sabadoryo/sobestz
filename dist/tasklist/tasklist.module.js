"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasklistModule = void 0;
const common_1 = require("@nestjs/common");
const tasklist_service_1 = require("./tasklist.service");
const tasklist_controller_1 = require("./tasklist.controller");
const prisma_src_1 = require("../app/prisma.src");
const users_module_1 = require("../users/users.module");
let TasklistModule = class TasklistModule {
};
TasklistModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule],
        providers: [tasklist_service_1.TasklistService, prisma_src_1.PrismaService],
        controllers: [tasklist_controller_1.TasklistController],
        exports: [tasklist_service_1.TasklistService]
    })
], TasklistModule);
exports.TasklistModule = TasklistModule;
//# sourceMappingURL=tasklist.module.js.map