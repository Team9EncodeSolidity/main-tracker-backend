import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MaintenanceToken.json';
import * as trackerJson from './assets/MaintenanceTracker.json';

@Injectable()
export class AppService {
  trackerContract: ethers.Contract;
  tokenContract: ethers.Contract;
  provider: ethers.Provider;
  wallet: ethers.Wallet;

  constructor(private configService: ConfigService) {
    this.provider = new ethers.JsonRpcProvider(
      this.configService.get<string>('RPC_ENDPOINT_URL'),
    );
    this.wallet = new ethers.Wallet(
      this.configService.get<string>('PRIVATE_KEY'),
      this.provider,
    );
    this.trackerContract = new ethers.Contract(
      this.configService.get<string>('TRACKER_ADDRESS'),
      trackerJson.abi,
      this.wallet,
    );
    this.setTokenContract();
  }
  
  async setTokenContract() {
    const tokenAddress = await this.trackerContract.tokenContract();
    this.tokenContract = new ethers.Contract(
      tokenAddress,
      tokenJson.abi,
      this.wallet,
    );
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getTrackerAddress() {
    return this.trackerContract.target.toString();
  }

  async getTokenAddress() {
    return this.tokenContract.target.toString();
  }
}
