"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidStatusException = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
class InvalidStatusException extends common_1.HttpException {
    constructor() {
        let statuses = Object.keys(client_1.Status).join(",");
        super(`Status can be one of: ${statuses}`, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.InvalidStatusException = InvalidStatusException;
//# sourceMappingURL=InvalidStatus.exception.js.map