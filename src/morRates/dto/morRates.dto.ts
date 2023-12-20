import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class MorRatesDto {
 
  @IsNotEmpty()
  @IsString()
  BackendDescription: string;

  @IsNotEmpty()
  @IsString()
  Descriptioninvoice: string;

  @IsNotEmpty()
  @IsNumber()
  MORID: number;

  @IsNotEmpty()
  @IsString()
  Service: string;

  @IsNotEmpty()
  @IsString()
  CommunicationCode: string;

  @IsNotEmpty()
  @IsNumber()
  Isnap: number;

  @IsNotEmpty()
  @IsNumber()
  ITfixed: number;

  @IsNotEmpty()
  @IsNumber()
  ITfurniture: number;

@IsNotEmpty()
  @IsNumber()
  FixedEU: number;

  @IsNotEmpty()
  @IsNumber()
  EUfurniture: number;

  @IsNotEmpty()
  @IsNumber()
  FixedWorld: number;

  @IsNotEmpty()
  @IsNumber()
  WorldFurniture: number;



 
}


