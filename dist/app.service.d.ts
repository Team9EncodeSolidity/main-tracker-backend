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
    getTaskById(id: string): Promise<BadRequestException | {
        clientName: any;
        systemName: any;
        maintenanceName: any;
        systemCycles: any;
        estimatedTime: any;
        startTime: any;
        cost: string;
        generalStatus: any;
        executionStatus: any;
        repairman: any;
        qualityInspector: any;
    }>;
    getNftsList(): Promise<BadRequestException | object[]>;
    getNftById(id: string): Promise<any>;
    getNftsDecodedList(): Promise<BadRequestException | object[]>;
    getNftDecodedById(id: string): Promise<BadRequestException | {
        nftMetadata: any;
    }>;
    balanceOfEth(address: string): Promise<{
        balanceWei: string;
        balanceEth: string;
    }>;
    balanceOfTokens(address: string): Promise<{
        balanceUnits: string;
        balanceTokens: any;
    }>;
    withdrawTreasuryEth(args: any): Promise<BadRequestException | {
        txHash: any;
    }>;
    openTask(args: any): Promise<BadRequestException | {
        txHash: any;
    }>;
}
