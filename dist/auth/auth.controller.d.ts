import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: LoginDto): Promise<{
        message: string;
        data: {
            access_token: any;
        };
    }>;
    register(registerDto: RegisterDto): Promise<{
        message: string;
        data: {
            access_token: any;
        };
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
    me(req: any): Promise<{
        data: {
            email: any;
            id: any;
        };
    }>;
}
