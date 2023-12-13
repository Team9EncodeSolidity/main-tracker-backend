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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_dto_1 = require("./dtos/app.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getBlockNumber() {
        return await this.appService.getBlockNumber();
    }
    async getTokenAddress() {
        return { result: await this.appService.getTokenAddress() };
    }
    async getTokenAbi() {
        return { result: await this.appService.getTokenAbi() };
    }
    async getTrackerAddress() {
        return { result: await this.appService.getTrackerAddress() };
    }
    async getTrackerAbi() {
        return { result: await this.appService.getTrackerAbi() };
    }
    async deployTokenContract(body = {}) {
        return { result: await this.appService.deployTokenContract(body) };
    }
    async deployTrackerContract(body) {
        return { result: await this.appService.deployTrackerContract(body) };
    }
    async setTrackerCtAddr(body) {
        return { result: await this.appService.setTrackerCtAddr(body) };
    }
    async grantMintRole(body) {
        return { result: await this.appService.grantMintRole(body) };
    }
    async getTasksList() {
        return { result: await this.appService.getTasksList() };
    }
    async getTaskById(id) {
        return { result: await this.appService.getTaskById(id) };
    }
    async getNftsList() {
        return { result: await this.appService.getNftsList() };
    }
    async getNftById(id) {
        return { result: await this.appService.getNftById(id) };
    }
    async getNftsDecodedList() {
        return { result: await this.appService.getNftsDecodedList() };
    }
    async getNftDecodedById(id) {
        return { result: await this.appService.getNftDecodedById(id) };
    }
    async balanceOfEth(address) {
        return { result: await this.appService.balanceOfEth(address) };
    }
    async balanceOfTokens(address) {
        return { result: await this.appService.balanceOfTokens(address) };
    }
    async withdrawTreasuryEth(body = {}) {
        return { result: await this.appService.withdrawTreasuryEth(body) };
    }
    async completeTask(body) {
        return { result: await this.appService.completeTask(body) };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/block-number'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getBlockNumber", null);
__decorate([
    (0, common_1.Get)('/token-contract-address'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTokenAddress", null);
__decorate([
    (0, common_1.Get)('/token-contract-abi'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTokenAbi", null);
__decorate([
    (0, common_1.Get)('/tracker-contract-address'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTrackerAddress", null);
__decorate([
    (0, common_1.Get)('/tracker-contract-abi'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTrackerAbi", null);
__decorate([
    (0, common_1.Post)('/deploy-token-contract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deployTokenContract", null);
__decorate([
    (0, common_1.Post)('/deploy-tracker-contract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.DeployTrackerContract]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deployTrackerContract", null);
__decorate([
    (0, common_1.Post)('/set-tracker-contract-address'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.SetTrackerCtAddrDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "setTrackerCtAddr", null);
__decorate([
    (0, common_1.Post)('/grant-mint-role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.GrantMintRole]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "grantMintRole", null);
__decorate([
    (0, common_1.Get)('/tasks-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTasksList", null);
__decorate([
    (0, common_1.Get)('/task/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Get)('/nfts-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getNftsList", null);
__decorate([
    (0, common_1.Get)('/nft/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getNftById", null);
__decorate([
    (0, common_1.Get)('/nfts-decoded-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getNftsDecodedList", null);
__decorate([
    (0, common_1.Get)('/nft-decoded/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getNftDecodedById", null);
__decorate([
    (0, common_1.Get)('/balance-of/eth/:address'),
    __param(0, (0, common_1.Param)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "balanceOfEth", null);
__decorate([
    (0, common_1.Get)('/balance-of/tokens/:address'),
    __param(0, (0, common_1.Param)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "balanceOfTokens", null);
__decorate([
    (0, common_1.Post)('/withdraw-treasury-eth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "withdrawTreasuryEth", null);
__decorate([
    (0, common_1.Post)('/complete-task'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.TaskIdToComplete]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "completeTask", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map