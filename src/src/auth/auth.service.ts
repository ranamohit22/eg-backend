import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(payload: any) {
    // Implement your user validation logic here
    // For example, fetch the user from the database based on the payload's information
    // Return the user object if valid, or null otherwise
    return null;
  }

  async generateToken(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
