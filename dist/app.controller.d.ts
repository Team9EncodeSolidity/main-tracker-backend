import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getTokenAddress(): Promise<{
        result: string;
    }>;
    getTrackerAddress(): Promise<{
        result: string;
    }>;
    getTasksList(): Promise<{
        result: object[];
    }>;
}
