import { BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
export declare class AppService {
    private configService;
    trackerContract: ethers.Contract;
    tokenContract: ethers.Contract;
    provider: ethers.Provider;
    wallet: ethers.Wallet;
    constructor(configService: ConfigService);
    private utilsSetTokenContract;
    getHello(): string;
    getBlockNumber(): Promise<number>;
    getTrackerAddress(): Promise<string | BadRequestException>;
    getTokenAddress(): Promise<string | BadRequestException>;
    setTrackerCtAddr({ address: trackerAddress }: {
        address: any;
    }): Promise<{
        tokenAddress: any;
        trackerAddress: any;
    }>;
    getTasksList(): Promise<BadRequestException | object[]>;
}
