import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class IsValidStatusPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): Promise<string>;
}
