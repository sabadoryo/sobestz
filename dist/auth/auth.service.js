"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const cache_manager_1 = require("@nestjs/cache-manager");
let AuthService = class AuthService {
    constructor(usersService, jwtService, cacheManager) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.cacheManager = cacheManager;
    }
    async login(email, password) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user || !(await this.comparePasswords(password, user.password))) {
            throw new common_1.UnauthorizedException;
        }
        return this.generateJwtToken(user);
    }
    async hashPassword(rawPassword) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(rawPassword, saltOrRounds);
        return hashedPassword;
    }
    async comparePasswords(userRequestedPassword, hashedPassword) {
        ;
        return bcrypt.compare(userRequestedPassword, hashedPassword);
    }
    async register(email, password) {
        let hashedPassword = await this.hashPassword(password);
        const newUser = await this.usersService.create(email, hashedPassword);
        return this.generateJwtToken(newUser);
    }
    async generateJwtToken(user) {
        const payload = { id: user.id, email: user.email };
        return await this.jwtService.signAsync(payload);
    }
    async blacklistToken(token) {
        let tokenParts = await this.jwtService.verifyAsync(token, {
            secret: process.env.JWT_SECRET
        });
        return this.cacheManager.set(token, true, tokenParts.exp - tokenParts.iat);
    }
    async isTokenBlacklisted(token) {
        return this.cacheManager.get(token);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService, Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map