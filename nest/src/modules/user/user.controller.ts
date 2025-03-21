import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async registerUser(@Body() body: { name: string; email: string; password: string }) {
    return this.userService.createUser(body);
  }

  @Get(':email')
  async getUser(@Param('email') email: string) {
    return this.userService.findUserByEmail(email);
  }
}
