"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidSortingParamsException = void 0;
const common_1 = require("@nestjs/common");
class InvalidSortingParamsException extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.InvalidSortingParamsException = InvalidSortingParamsException;
//# sourceMappingURL=InvalidSoritngParams.exception.js.map