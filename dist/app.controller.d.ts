import { AppService } from './app.service';
import { SetTrackerCtAddrDto, DeployTrackerContract, GrantMintRole, TaskIdToComplete } from './dtos/app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getBlockNumber(): Promise<number>;
    getTokenAddress(): Promise<{
        result: string | import("@nestjs/common").BadRequestException;
    }>;
    getTokenAbi(): Promise<{
        result: ({
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
        })[];
    }>;
    getTrackerAddress(): Promise<{
        result: string | import("@nestjs/common").BadRequestException;
    }>;
    getTrackerAbi(): Promise<{
        result: ({
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
        })[];
    }>;
    deployTokenContract(body?: {}): Promise<{
        result: string | import("@nestjs/common").BadRequestException;
    }>;
    deployTrackerContract(body: DeployTrackerContract): Promise<{
        result: string | import("@nestjs/common").BadRequestException;
    }>;
    setTrackerCtAddr(body: SetTrackerCtAddrDto): Promise<{
        result: {
            tokenAddress: any;
            trackerAddress: any;
        };
    }>;
    grantMintRole(body: GrantMintRole): Promise<{
        result: {
            txHash: any;
        };
    }>;
    getTasksList(): Promise<{
        result: import("@nestjs/common").BadRequestException | object[];
    }>;
    getTaskById(id: string): Promise<{
        result: import("@nestjs/common").BadRequestException | {
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
        };
    }>;
    getNftsList(): Promise<{
        result: import("@nestjs/common").BadRequestException | object[];
    }>;
    getNftById(id: string): Promise<{
        result: any;
    }>;
    getNftsDecodedList(): Promise<{
        result: import("@nestjs/common").BadRequestException | object[];
    }>;
    getNftDecodedById(id: string): Promise<{
        result: import("@nestjs/common").BadRequestException | {
            nftMetadata: any;
        };
    }>;
    balanceOfEth(address: string): Promise<{
        result: {
            balanceWei: string;
            balanceEth: string;
        };
    }>;
    balanceOfTokens(address: string): Promise<{
        result: {
            balanceUnits: string;
            balanceTokens: any;
        };
    }>;
    withdrawTreasuryEth(body?: {}): Promise<{
        result: import("@nestjs/common").BadRequestException | {
            txHash: any;
        };
    }>;
    completeTask(body: TaskIdToComplete): Promise<{
        result: import("@nestjs/common").BadRequestException | {
            txHash: any;
        };
    }>;
}
