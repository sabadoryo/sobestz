import { HttpException, HttpStatus } from "@nestjs/common";
import { Status } from "@prisma/client";

export class InvalidStatusException extends HttpException {
    constructor() {
        let statuses = Object.keys(Status).join(",");

        super(`Status can be one of: ${statuses}`, HttpStatus.FORBIDDEN);
    }
}