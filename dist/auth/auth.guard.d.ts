import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private cacheManager;
    constructor(jwtService: JwtService, cacheManager: Cache);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
