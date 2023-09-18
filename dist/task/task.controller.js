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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const auth_guard_1 = require("../auth/auth.guard");
const createTask_dto_1 = require("./dtos/createTask.dto");
const isUserExists_pipe_1 = require("../users/pipes/isUserExists.pipe");
const client_1 = require("@prisma/client");
const isTasklistExists_pipe_1 = require("../tasklist/pipes/isTasklistExists.pipe");
const isTaskExists_pipe_1 = require("./pipes/isTaskExists.pipe");
const isValidStatus_pipe_1 = require("./pipes/isValidStatus.pipe");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(taskData, user, tasklist) {
        let task = await this.taskService.createTask(taskData);
        return {
            message: "tasklist created successfully",
            data: Object.assign({}, task)
        };
    }
    async getTask(task) {
        return {
            message: "task found successfully",
            data: Object.assign({}, task)
        };
    }
    async getAllTasks(name) {
        let tasks = await this.taskService.findAll(name);
        return {
            message: "task found successfully",
            data: tasks
        };
    }
    async changeTaskStatus(task, status) {
        let updatedTask = await this.taskService.updateStatus(task.id, status);
        return {
            message: "task status updated successfully",
            data: Object.assign({}, updatedTask)
        };
    }
    async deleteTask(task) {
        await this.taskService.deleteTask(task.id);
        return {
            message: "task deleted successfully",
            data: null
        };
    }
};
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)("user_id", isUserExists_pipe_1.IsUserExistsPipe)),
    __param(2, (0, common_1.Body)("tasklist_id", isTasklistExists_pipe_1.IsTasklistExistsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTask_dto_1.CreateTaskDto, Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id", isTaskExists_pipe_1.IsTaskExists)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTask", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(''),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    (0, common_1.Patch)(':id/change-status'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id", isTaskExists_pipe_1.IsTaskExists)),
    __param(1, (0, common_1.Body)("status", isValidStatus_pipe_1.IsValidStatusPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "changeTaskStatus", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id", isTaskExists_pipe_1.IsTaskExists)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map