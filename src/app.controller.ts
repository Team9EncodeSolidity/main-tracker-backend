import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tracker-address')
  async getTrackerAddress() {
    return { result: await this.appService.getTrackerAddress() };
  }

  @Get('token-address')
  async getTokenAddress() {
    return { result: await this.appService.getTokenAddress() };
  }

  @Get('tasks-list')
  async getTasksList() {
    return { result: await this.appService.getTasksList() };
  }
  
}
