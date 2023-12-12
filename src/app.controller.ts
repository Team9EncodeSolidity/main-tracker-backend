import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/token-contract-address')
  async getTokenAddress() {
    return { result: await this.appService.getTokenAddress() };
  }

  @Get('/token-contract-address')
  async getTrackerAddress() {
    return { result: await this.appService.getTrackerAddress() };
  }
}
