import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import  RegisterDto  from './dto/user-register.dto';
import  LoginDto  from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('users')
  async getUsers() {
    return await this.authService.findAll();
  }
}
