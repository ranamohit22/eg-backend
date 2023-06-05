import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(payload: any): Promise<any>;
    validateUser(payload: any): Promise<void>;
}
