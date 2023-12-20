// registration.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsBoolean,
} from 'class-validator';

export class RegistrationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  partner: string;

  @IsNotEmpty()
  @IsBoolean()
  active: boolean;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
