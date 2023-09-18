import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
        ) {}

    async login(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(email);
        
        if (!user || !(await this.comparePasswords(password, user.password))) {
            throw new UnauthorizedException
        }
        
        return this.generateJwtToken(user);
    }

    async hashPassword(rawPassword: string): Promise<string> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(rawPassword, saltOrRounds);

        return hashedPassword;
    }

    async comparePasswords(userRequestedPassword: string, hashedPassword: string): Promise<boolean> {;
        
        return bcrypt.compare(userRequestedPassword, hashedPassword);
    }

    async register(email: string, password: string): Promise<any> {
        let hashedPassword = await this.hashPassword(password);

        const newUser = await this.usersService.create(email, hashedPassword);
        
        return this.generateJwtToken(newUser);
    }

    async generateJwtToken(user: User) {
        const payload = { id: user.id, email: user.email };
        
        return await this.jwtService.signAsync(payload);
    }

    async blacklistToken(token: string) {
        let tokenParts = await this.jwtService.verifyAsync(
            token,
            {
              secret: process.env.JWT_SECRET
            }
          );

        return this.cacheManager.set(token, true, tokenParts.exp - tokenParts.iat);
    }

    async isTokenBlacklisted(token: string) {
        return this.cacheManager.get(token);
    }
}
