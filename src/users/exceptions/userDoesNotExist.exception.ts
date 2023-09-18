import { HttpException, HttpStatus } from "@nestjs/common";

export class UserDoesNotExistException extends HttpException {
    constructor() {
      super('User with given attribute does not exist', HttpStatus.FORBIDDEN);
    }
}