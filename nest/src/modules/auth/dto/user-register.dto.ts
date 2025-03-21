import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export default class RegisterDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
