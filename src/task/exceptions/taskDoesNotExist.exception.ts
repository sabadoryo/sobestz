import { HttpException, HttpStatus } from "@nestjs/common";

export class TaskDoesNotExistException extends HttpException {
    constructor() {
      super('Task does not exist', HttpStatus.FORBIDDEN);
    }
}