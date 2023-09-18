import { Body, Controller, Post, HttpCode, HttpStatus, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { AuthGuard } from './auth.guard';

let cache = new Map();

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto: LoginDto) {
        let access_token = await this.authService.login(signInDto.email, signInDto.password);
        
        return {
            message: "login successfull",
            data: {
                access_token
            }
        }
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        let access_token = await this.authService.register(registerDto.email, registerDto.password);
        
        return {
            message: "register successfull",
            data: {
                access_token
            }
        }
    }

    // На самом деле меганизм логаута для jwt токенов можно сделать по разному.
    /*
        1) Blacklisting. создать какой нибудь кеш, где при логауте, мы сохраним токен в кеш и будем проверять каждый раз при активации нашего мидлвара(гуарда) на аутентификацию
        2) Малый TTL и взаймодействие со стороны клиента + рефреш токены
    */
   // Здесь я с имплементирую мой "кеш".
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Request() req) {
        const [type, token] = req.headers.authorization?.split(' ') ?? [];
        
        await this.authService.blacklistToken(token);

        return {
            message: "logout successfull",
        }
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Get('@me')
    async me(@Request() req) {

        return {
            data: {
                email: req["user"].email,
                id: req["user"].id
            }
        }
    }
}
