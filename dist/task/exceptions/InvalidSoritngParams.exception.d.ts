import { HttpException } from "@nestjs/common";
export declare class InvalidSortingParamsException extends HttpException {
    constructor(message: string);
}
