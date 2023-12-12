import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {
  SetTrackerCtAddrDto,
  DeployTrackerContract,
  GrantMintRole,
} from './dtos/app.dto';

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

  @Get('/token-contract-abi')
  async getTokenAbi() {
    return { result: await this.appService.getTokenAbi() };
  }

  @Get('/tracker-contract-address')
  async getTrackerAddress() {
    return { result: await this.appService.getTrackerAddress() };
  }

  @Get('/tracker-contract-abi')
  async getTrackerAbi() {
    return { result: await this.appService.getTrackerAbi() };
  }

  @Post('/deploy-token-contract')
  async deployTokenContract(@Body() body = {}) {
    return { result: await this.appService.deployTokenContract(body) };
  }

  @Post('/deploy-tracker-contract')
  async deployTrackerContract(@Body() body: DeployTrackerContract) {
    return { result: await this.appService.deployTrackerContract(body) };
  }

  @Post('/set-tracker-contract-address')
  async setTrackerCtAddr(@Body() body: SetTrackerCtAddrDto) {
    return { result: await this.appService.setTrackerCtAddr(body) };
  }

  @Post('/grant-mint-role')
  async grantMintRole(@Body() body: GrantMintRole) {
    return { result: await this.appService.grantMintRole(body) };
  }

  @Get('/tasks-list')
  async getTasksList() {
    return { result: await this.appService.getTasksList() };
  }
}
