import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getBlockNumber(): Promise<number>;
    getTokenAddress(): Promise<{
        result: string | import("@nestjs/common").BadRequestException;
    }>;
    getTrackerAddress(): Promise<{
        result: string | import("@nestjs/common").BadRequestException;
    }>;
    setTrackerCtAddr(body: {
        address: string;
    }): Promise<{
        result: {
            tokenAddress: any;
            trackerAddress: any;
        };
    }>;
    getTasksList(): Promise<{
        result: import("@nestjs/common").BadRequestException | object[];
    }>;
}
