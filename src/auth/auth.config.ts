import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfig {
  public jwt_secret: string =
    process.env.JWT_SECRET;
  public name: string = process.env.NAME;
  public email: string = process.env.EMAIl;
  public password: string = process.env.PASSWORD;
  public role :string = process.env.ROLE
  public partner :string = process.env.PARTNER
  public active: boolean = process.env.ACTIVE === 'true';

}
