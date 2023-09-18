import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidIdTypeException extends HttpException {
    constructor() {
      super('Id type is invalid', HttpStatus.FORBIDDEN);
    }
}