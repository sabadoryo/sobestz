"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasklistDoesNotExist = void 0;
const common_1 = require("@nestjs/common");
class TasklistDoesNotExist extends common_1.HttpException {
    constructor() {
        super('Tasklist with given id does not exist', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.TasklistDoesNotExist = TasklistDoesNotExist;
//# sourceMappingURL=TasklistDoesNotExist.exception.js.map