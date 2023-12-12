import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/block-number')
  async getBlockNumber() {
    return await this.appService.getBlockNumber();
  }

  @Get('/token-contract-address')
  async getTokenAddress() {
    return { result: await this.appService.getTokenAddress() };
  }

  @Get('/tracker-contract-address')
  async getTrackerAddress() {
    return { result: await this.appService.getTrackerAddress() };
  }

  @Post('/set-tracker-contract-address')
  async setTrackerCtAddr(@Body() body: { address: string }) {
    return { result: await this.appService.setTrackerCtAddr(body) };
  }

  @Get('/tasks-list')
  async getTasksList() {
    return { result: await this.appService.getTasksList() };
  }
}

// import { ApiProperty } from '@nestjs/swagger';

// class SetTrackerCtAddrDto {
//   @ApiProperty({
//     type: String,
//     required: true,
//     default: '0x0000000000000000000000000000000000000000',
//   })
//   address: string;
// }
