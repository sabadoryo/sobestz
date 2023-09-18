import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class IsValidOrderByParams implements PipeTransform {
    transform(orderByObject: Object, metadata: ArgumentMetadata): Promise<Object>;
}
