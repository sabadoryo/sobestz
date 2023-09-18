"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDoesNotExistException = void 0;
const common_1 = require("@nestjs/common");
class TaskDoesNotExistException extends common_1.HttpException {
    constructor() {
        super('Task does not exist', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.TaskDoesNotExistException = TaskDoesNotExistException;
//# sourceMappingURL=taskDoesNotExist.exception.js.map