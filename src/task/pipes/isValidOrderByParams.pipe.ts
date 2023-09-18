import { PipeTransform, Injectable, ArgumentMetadata, Scope, Inject } from '@nestjs/common';
import { validSortOrders, validTaskSortingFields } from '../constants';
import { InvalidSortingParamsException } from '../exceptions/InvalidSoritngParams.exception';


@Injectable()
export class IsValidOrderByParams implements PipeTransform {
    async transform(orderByObject: Object, metadata: ArgumentMetadata) {
        const validSortFields = validTaskSortingFields.join(",");
        const validSortWays = validSortOrders.join(",");

        for (const field in orderByObject) {
            if (!validTaskSortingFields.includes(field)) {
                throw new InvalidSortingParamsException(`Invalid field, valid fields are: ${validSortFields}`);
            }

            if (!validSortOrders.includes(orderByObject[field])) {
                throw new InvalidSortingParamsException(`Invalid order way, valid values are: ${validSortWays}`);
            }

            if (orderByObject[field] == 1 || orderByObject[field] === "asc") {
                orderByObject[field] = "asc";
            }

            if (orderByObject[field] == -1 || orderByObject[field] === "desc") {
                orderByObject[field] = "desc";
            }
        }
        
        return orderByObject;
    }
}