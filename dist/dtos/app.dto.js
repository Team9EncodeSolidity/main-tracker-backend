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
exports.GrantMintRole = exports.DeployTrackerContract = exports.PayForTask = exports.SetTrackerCtAddrDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SetTrackerCtAddrDto {
}
exports.SetTrackerCtAddrDto = SetTrackerCtAddrDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: '0x0000000000000000000000000000000000000000',
    }),
    __metadata("design:type", String)
], SetTrackerCtAddrDto.prototype, "address", void 0);
class PayForTask {
}
exports.PayForTask = PayForTask;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: "0",
    }),
    __metadata("design:type", String)
], PayForTask.prototype, "tokenId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: 'ipfs://QmdtibqnMFai8CwQ6qUUUkxhs4MAZNPnrx9h4Ncn5PyQpn',
    }),
    __metadata("design:type", String)
], PayForTask.prototype, "url", void 0);
class DeployTrackerContract {
}
exports.DeployTrackerContract = DeployTrackerContract;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: '0x0000000000000000000000000000000000000000',
    }),
    __metadata("design:type", String)
], DeployTrackerContract.prototype, "tokenAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: '1000000000000000000',
    }),
    __metadata("design:type", String)
], DeployTrackerContract.prototype, "ration", void 0);
class GrantMintRole {
}
exports.GrantMintRole = GrantMintRole;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: '0x0000000000000000000000000000000000000000',
    }),
    __metadata("design:type", String)
], GrantMintRole.prototype, "address", void 0);
//# sourceMappingURL=app.dto.js.map