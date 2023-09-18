"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDoesNotExistException = void 0;
const common_1 = require("@nestjs/common");
class UserDoesNotExistException extends common_1.HttpException {
    constructor() {
        super('User with given attribute does not exist', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.UserDoesNotExistException = UserDoesNotExistException;
//# sourceMappingURL=userDoesNotExist.exception.js.map