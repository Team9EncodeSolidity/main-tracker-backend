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
        this.trackerContract = new ethers_1.ethers.Contract(this.configService.get('TOKEN_CT_ADDR', process.env.TOKEN_CT_ADDR || ethers_1.ethers.ZeroAddress), trackerJson.abi, this.wallet);
        this.tokenContract = new ethers_1.ethers.Contract(this.configService.get('MAIN_CT_ADDR', process.env.MAIN_CT_ADDR || ethers_1.ethers.ZeroAddress), tokenJson.abi, this.wallet);
    }
    getHello() {
        return 'Main Backend App Running OK. Go to .../api/ for more!';
    }
    async getTrackerAddress() {
        return this.trackerContract.target.toString();
    }
    async getTokenAddress() {
        return this.tokenContract.target.toString();
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppService);
//# sourceMappingURL=app.service.js.map