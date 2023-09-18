"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidIdTypeException = void 0;
const common_1 = require("@nestjs/common");
class InvalidIdTypeException extends common_1.HttpException {
    constructor() {
        super('Id type is invalid', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.InvalidIdTypeException = InvalidIdTypeException;
//# sourceMappingURL=InvalidIdType.exception.js.map