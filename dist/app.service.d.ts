import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
export declare class AppService {
    private configService;
    trackerContract: ethers.Contract;
    tokenContract: ethers.Contract;
    provider: ethers.Provider;
    wallet: ethers.Wallet;
    constructor(configService: ConfigService);
    getHello(): string;
    getTrackerAddress(): Promise<string>;
    getTokenAddress(): Promise<string>;
}
