import { HttpException, HttpStatus } from "@nestjs/common";

export class TasklistDoesNotExist extends HttpException {
    constructor() {
      super('Tasklist with given id does not exist', HttpStatus.FORBIDDEN);
    }
}