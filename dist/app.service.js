"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ethers_1 = require("ethers");
const tokenJson = require("./assets/MaintenanceToken.json");
const trackerJson = require("./assets/MaintenanceTracker.json");
let AppService = class AppService {
    constructor(configService) {
        this.configService = configService;
        this.provider = new ethers_1.ethers.JsonRpcProvider(this.configService.get('RPC_ENDPOINT_URL', process.env.RPC_ENDPOINT_URL));
        this.wallet = new ethers_1.ethers.Wallet(this.configService.get('PRIVATE_KEY', process.env.PRIVATE_KEY || 'f'.repeat(64)), this.provider);
        this.trackerContract = new ethers_1.ethers.Contract(this.configService.get('TRACKER_CT_ADDR', process.env.TRACKER_CT_ADDR || ethers_1.ethers.ZeroAddress), trackerJson.abi, this.wallet);
        this.utilsSetTokenContract();
    }
    async utilsSetTokenContract() {
        const tokenAddress = this.trackerContract
            ? (await this.trackerContract?.tokenContract()).toString()
            : ethers_1.ethers.ZeroAddress;
        this.tokenContract = new ethers_1.ethers.Contract(tokenAddress, tokenJson.abi, this.wallet);
    }
    getHello() {
        return 'Main Backend App Running OK. Go to .../api/ for more!';
    }
    async getBlockNumber() {
        const { provider } = this;
        const blkNum = await provider.getBlockNumber();
        const lastBlkNum = blkNum | 0;
        return lastBlkNum;
    }
    async getTokenAddress() {
        try {
            return this.tokenContract.target.toString();
        }
        catch (e) {
            return new common_1.BadRequestException('Err:WrongTokenCt', e);
        }
    }
    async getTokenAbi() {
        return tokenJson.abi;
    }
    async getTrackerAddress() {
        try {
            return this.trackerContract.target.toString();
        }
        catch (e) {
            return new common_1.BadRequestException('Err:WrongTrackerCt', e);
        }
    }
    async getTrackerAbi() {
        return trackerJson.abi;
    }
    async deployTokenContract(args) {
        if (Object.keys(args).length) {
            return new common_1.BadRequestException('Err:NoArgsPls');
        }
        const { abi, bytecode: code } = tokenJson;
        const ctFactory = new ethers_1.ethers.ContractFactory(abi, code, this.wallet);
        const contract = await ctFactory.deploy();
        await contract.waitForDeployment();
        const newCtAddr = await contract.getAddress();
        this.tokenContract = new ethers_1.ethers.Contract(newCtAddr, abi, this.wallet);
        return newCtAddr;
    }
    async deployTrackerContract(args) {
        if (Object.keys(args).length > 2) {
            return new common_1.BadRequestException('Err:TooManyArgs');
        }
        const { tokenAddress, ration } = args;
        if (tokenAddress == ethers_1.ethers.ZeroAddress) {
            return new common_1.BadRequestException('Err:TokenAddrIsZero');
        }
        const { abi, bytecode: code } = trackerJson;
        const ctFactory = new ethers_1.ethers.ContractFactory(abi, code, this.wallet);
        const contract = await ctFactory.deploy(tokenAddress, ration);
        await contract.waitForDeployment();
        const newCtAddr = await contract.getAddress();
        this.trackerContract = new ethers_1.ethers.Contract(newCtAddr, abi, this.wallet);
        return newCtAddr;
    }
    async setTrackerCtAddr({ address: trackerAddress }) {
        this.trackerContract = new ethers_1.ethers.Contract(trackerAddress, trackerJson.abi, this.wallet);
        const tokenAddress = await this.trackerContract?.tokenContract();
        return { tokenAddress, trackerAddress };
    }
    async getTasksList() {
        try {
            const idCounter = await this.trackerContract.tokenIdCounter();
            const arr = [];
            for (let i = 0; i < Number(idCounter); i++) {
                const id = i;
                const task = await this.trackerContract.maintenanceTasks(id);
                const { clientName, systemName, maintenanceName, systemCycles, estimatedTime, startTime, cost, generalStatus, executionStatus, repairman, qualityInspector, } = task;
                const tokenId = i.toString();
                const taskCost = ethers_1.ethers.formatEther(cost.toString());
                const genStatus = generalStatus.toString();
                const execStatus = executionStatus.toString();
                arr.push({
                    tokenId,
                    clientName,
                    systemName,
                    maintenanceName,
                    systemCycles,
                    estimatedTime,
                    startTime,
                    taskCost,
                    genStatus,
                    execStatus,
                    repairman,
                    qualityInspector,
                });
            }
            return arr;
        }
        catch (e) {
            return new common_1.BadRequestException('Err:ProblemWithTrackerCt', e);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppService);
//# sourceMappingURL=app.service.js.map