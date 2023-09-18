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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_src_1 = require("../app/prisma.src");
let TaskService = class TaskService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTask(data) {
        return this.prisma.task.create({
            data
        });
    }
    async findOneById(id) {
        return this.prisma.task.findFirst({
            where: {
                id
            }
        });
    }
    async findOneByTasklistId(tasklist_id) {
        return this.prisma.task.findMany({
            where: {
                tasklist_id
            }
        });
    }
    async findAll(name, orderBy) {
        return this.prisma.task.findMany({
            where: {
                name: {
                    contains: name
                }
            },
            orderBy
        });
    }
    async updateStatus(id, status) {
        return this.prisma.task.update({
            where: {
                id
            },
            data: {
                status
            }
        });
    }
    async deleteTask(id) {
        return this.prisma.task.delete({
            where: {
                id
            }
        });
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_src_1.PrismaService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map