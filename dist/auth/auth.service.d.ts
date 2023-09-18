import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from '@prisma/client';
import { Cache } from 'cache-manager';
export declare class AuthService {
    private usersService;
    private jwtService;
    private cacheManager;
    constructor(usersService: UsersService, jwtService: JwtService, cacheManager: Cache);
    login(email: string, password: string): Promise<any>;
    hashPassword(rawPassword: string): Promise<string>;
    comparePasswords(userRequestedPassword: string, hashedPassword: string): Promise<boolean>;
    register(email: string, password: string): Promise<any>;
    generateJwtToken(user: User): Promise<string>;
    blacklistToken(token: string): Promise<void>;
    isTokenBlacklisted(token: string): Promise<unknown>;
}
