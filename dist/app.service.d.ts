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
    getTokenAddress(): Promise<string | BadRequestException>;
    getTokenAbi(): Promise<({
        inputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
    getTrackerAddress(): Promise<string | BadRequestException>;
    getTrackerAbi(): Promise<({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
    deployTokenContract(args: any): Promise<string | BadRequestException>;
    deployTrackerContract(args: any): Promise<string | BadRequestException>;
    setTrackerCtAddr({ address: trackerAddress }: {
        address: any;
    }): Promise<{
        tokenAddress: any;
        trackerAddress: any;
    }>;
    grantMintRole({ address }: {
        address: any;
    }): Promise<{
        txHash: any;
    }>;
    getTasksList(): Promise<BadRequestException | object[]>;
}
