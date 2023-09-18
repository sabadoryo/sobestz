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
exports.IsTaskExists = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("../task.service");
const taskDoesNotExist_exception_1 = require("../exceptions/taskDoesNotExist.exception");
const class_validator_1 = require("class-validator");
const InvalidIdType_exception_1 = require("../../common/exceptions/InvalidIdType.exception");
let IsTaskExists = class IsTaskExists {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async transform(value, metadata) {
        if (!(0, class_validator_1.isMongoId)(value)) {
            throw new InvalidIdType_exception_1.InvalidIdTypeException();
        }
        const task = await this.taskService.findOneById(value);
        if (!task) {
            throw new taskDoesNotExist_exception_1.TaskDoesNotExistException();
        }
        return task;
    }
};
IsTaskExists = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], IsTaskExists);
exports.IsTaskExists = IsTaskExists;
//# sourceMappingURL=isTaskExists.pipe.js.map