import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LtaController } from './lta/lta.controller';
import { LtaService } from './lta/lta.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key', // Replace with your actual secret key
    }),
  ],
  controllers: [LtaController],
  providers: [LtaService, AuthService, JwtStrategy],
})
export class AppModule {}
