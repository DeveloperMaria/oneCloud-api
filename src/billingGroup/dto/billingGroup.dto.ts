import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class BillingGroupDto {
  
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsNumber()
  Monthinadvance: number;


  @IsNotEmpty()
  @IsNumber()
  Daytoexpiry: number;

  @IsNotEmpty()
  @IsNumber()
  TransmitterCode: number;

  @IsNotEmpty()
  @IsString()
  Name: string;

  @IsNotEmpty()
  @IsString()
  Address: string;

  @IsNotEmpty()
  @IsNumber()
  PostalCode: number;


  @IsNotEmpty()
  @IsString()
  Common: string;

  @IsNotEmpty()
  @IsString()
  Province: string;

  @IsNotEmpty()
  @IsNumber()
  Telephone: number;

  @IsNotEmpty()
  @IsString()
  CrimeCode: string;

  @IsNotEmpty()
  @IsString()
  Bank: string;

  @IsNotEmpty()
  @IsString()
  IBAN: string;

  @IsNotEmpty()
  @IsNumber()
  PostalAccount: number;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  @IsNumber()
  VATNumber: number;

  @IsNotEmpty()
  @IsNumber()
  TaxIDCode: number;

  @IsNotEmpty()
  @IsString()
  SepaCodeCUC: string;

  @IsNotEmpty()
  @IsNumber()
  SepaCreditorCode: number;

  @IsNotEmpty()
  @IsNumber()
  DD1stUnpaidNotice: number;

  @IsNotEmpty()
  @IsNumber()
  DD2stUnpaidNotice: number;

  @IsNotEmpty()
  @IsNumber()
  GGServicesBlock: number;

  @IsNotEmpty()
  @IsString()
  Nation: string;

}


