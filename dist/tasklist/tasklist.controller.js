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
exports.TasklistController = void 0;
const common_1 = require("@nestjs/common");
const createTasklist_dto_1 = require("./dtos/createTasklist.dto");
const tasklist_service_1 = require("./tasklist.service");
const auth_guard_1 = require("../auth/auth.guard");
const isUserExists_pipe_1 = require("../users/pipes/isUserExists.pipe");
let TasklistController = class TasklistController {
    constructor(tasklistService) {
        this.tasklistService = tasklistService;
    }
    async createTasklist(taskListData, user) {
        let tasklist = await this.tasklistService.createTaskList(taskListData);
        return {
            message: "tasklist created successfully",
            data: Object.assign({}, tasklist)
        };
    }
};
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)("user_id", isUserExists_pipe_1.IsUserExistsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTasklist_dto_1.CreateTasklistDto, Object]),
    __metadata("design:returntype", Promise)
], TasklistController.prototype, "createTasklist", null);
TasklistController = __decorate([
    (0, common_1.Controller)('tasklist'),
    __metadata("design:paramtypes", [tasklist_service_1.TasklistService])
], TasklistController);
exports.TasklistController = TasklistController;
//# sourceMappingURL=tasklist.controller.js.map