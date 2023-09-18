"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOwnershipException = void 0;
const common_1 = require("@nestjs/common");
class UserOwnershipException extends common_1.HttpException {
    constructor() {
        super('You are not allowed to do this action', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.UserOwnershipException = UserOwnershipException;
//# sourceMappingURL=UserOwnership.exception.js.map