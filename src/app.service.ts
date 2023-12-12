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
      this.configService.get<string>(
        'RPC_ENDPOINT_URL',
        process.env.RPC_ENDPOINT_URL,
      ),
    );
    this.wallet = new ethers.Wallet(
      this.configService.get<string>(
        'PRIVATE_KEY',
        process.env.PRIVATE_KEY || 'f'.repeat(64),
      ),
      this.provider,
    );

    this.trackerContract = new ethers.Contract(
      this.configService.get<string>(
        'TOKEN_CT_ADDR',
        process.env.TOKEN_CT_ADDR || ethers.ZeroAddress,
      ),
      trackerJson.abi,
      this.wallet,
    );
    this.tokenContract = new ethers.Contract(
      this.configService.get<string>(
        'MAIN_CT_ADDR',
        process.env.MAIN_CT_ADDR || ethers.ZeroAddress,
      ),
      tokenJson.abi,
      this.wallet,
    );
  }

  getHello(): string {
    return 'Main Backend App Running OK. Go to .../api/ for more!';
  }

  async getTrackerAddress() {
    // return 1;
    return this.trackerContract.target.toString();
  }

  async getTokenAddress() {
    // return 1;
    return this.tokenContract.target.toString();
  }
}
