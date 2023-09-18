import { HttpException, HttpStatus } from "@nestjs/common";


export class InvalidSortingParamsException extends HttpException {
    constructor(message: string) {
        super(message, HttpStatus.FORBIDDEN);
    }
}