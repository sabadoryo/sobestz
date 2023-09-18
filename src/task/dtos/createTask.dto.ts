import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';

export class CreateTaskDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    @IsMongoId()
    user_id: string;
    
    @ApiProperty()
    @IsString()
    @IsMongoId()
    tasklist_id: string;
}