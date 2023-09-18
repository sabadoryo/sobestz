import { HttpException, HttpStatus } from "@nestjs/common";

export class UserOwnershipException extends HttpException {
    constructor() {
      super('You are not allowed to do this action', HttpStatus.FORBIDDEN);
    }
}