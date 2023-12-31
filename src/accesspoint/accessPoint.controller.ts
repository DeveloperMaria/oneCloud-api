import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  UseGuards,
  Param,
  NotFoundException,
  Get,
} from '@nestjs/common';
import { AccessPointService } from './accessPoint.service';
import { AccessPointDto } from './dto';
import { AccessPoint } from './accessPoint.entity';
import { AuthGuard } from 'src/middleware/authGuad.middleware';

interface ApiResponse<T> {
  message: string;
  data: T;
}

@Controller('accessPoint')
export class AccessPointController {
  constructor(
    private accessPointService: AccessPointService,
  ) {}

  @Post('add')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard)
  async add(
    @Body() accessPointDto: AccessPointDto,
  ): Promise<ApiResponse<AccessPoint>>  {
    try {
      const user = await this.accessPointService.add(
        accessPointDto,
      );

      return { message: 'AccessPoint added successfully', data: user };
    } catch (error) {
      throw new BadRequestException(
        error.message,
      );
    }
  }

  @Post('update/:id') 
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string, 
    @Body() accessPointDto: AccessPointDto, 
  ): Promise<ApiResponse<AccessPoint>>  {
    try {
      const AccessPoint =
        await this.accessPointService.update(
          id,
          accessPointDto,
        );
      if (!AccessPoint) {
        throw new NotFoundException(
          `AccessPoint with ID ${id} not found.`,
        );
      }
      return {
        message: 'AccessPoint updated successfully',
        data: AccessPoint,
      };    } catch (error) {
      throw new BadRequestException(
        error.message,
      );
    }
  }

  @Post('delete/:id') 
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard)
  async delete(
    @Param('id') id: string, 
  ): Promise<{ message: string; deletedPartner: AccessPoint | null }> {
    try {
      const AccessPoint = await this.accessPointService.delete(id);
      if (!AccessPoint) {
        throw new NotFoundException(`AccessPoint with ID ${id} not found.`);
      }
      return { message: `AccessPoint with ID ${id} has been deleted.`, deletedPartner: AccessPoint };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }


  @Get('/') 
  @UseGuards(AuthGuard) 
  async getAll(): Promise<AccessPoint[]> {
    const AccessPoint = await this.accessPointService.getAll();
    return AccessPoint;
  }

  @Get('ipAccessPoint')
  @UseGuards(AuthGuard)
  async getAllIpAccessPoint(): Promise<string[]> {
    return this.accessPointService.getAllIpAccessPoint();
  }
 
}
