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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTasklistExistsPipe = void 0;
const common_1 = require("@nestjs/common");
const tasklist_service_1 = require("../tasklist.service");
const TasklistDoesNotExist_exception_1 = require("../exceptions/TasklistDoesNotExist.exception");
let IsTasklistExistsPipe = class IsTasklistExistsPipe {
    constructor(tasklistService) {
        this.tasklistService = tasklistService;
    }
    async transform(value, metadata) {
        const tasklist = await this.tasklistService.findOneById(value);
        if (!tasklist) {
            throw new TasklistDoesNotExist_exception_1.TasklistDoesNotExist();
        }
        return tasklist;
    }
};
IsTasklistExistsPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tasklist_service_1.TasklistService])
], IsTasklistExistsPipe);
exports.IsTasklistExistsPipe = IsTasklistExistsPipe;
//# sourceMappingURL=isTasklistExists.pipe.js.map