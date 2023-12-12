import { AppService } from './app.service';
import { SetTrackerCtAddrDto } from './dtos/app.dto';
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
    setTrackerCtAddr(body: SetTrackerCtAddrDto): Promise<{
        result: {
            tokenAddress: any;
            trackerAddress: any;
        };
    }>;
    getTasksList(): Promise<{
        result: import("@nestjs/common").BadRequestException | object[];
    }>;
}
