import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MaintenanceToken.json';
import * as trackerJson from './assets/MaintenanceTracker.json';

@Injectable()
export class AppService {
  trackerContract: ethers.Contract;
  tokenContract: ethers.Contract;
  provider: ethers.Provider;
  wallet: ethers.Wallet;

  constructor(private configService: ConfigService) {
    this.provider = new ethers.JsonRpcProvider(
      this.configService.get<string>(
        'RPC_ENDPOINT_URL',
        process.env.RPC_ENDPOINT_URL,
      ),
    );
    this.wallet = new ethers.Wallet(
      this.configService.get<string>(
        'PRIVATE_KEY',
        process.env.PRIVATE_KEY || 'f'.repeat(64),
      ),
      this.provider,
    );

    this.trackerContract = new ethers.Contract(
      this.configService.get<string>(
        'TRACKER_CT_ADDR',
        process.env.TRACKER_CT_ADDR || ethers.ZeroAddress,
      ),
      trackerJson.abi,
      this.wallet,
    );
    this.utilsSetTokenContract();
  }

  private async utilsSetTokenContract() {
    const tokenAddress = this.trackerContract
      ? (await this.trackerContract?.tokenContract()).toString()
      : ethers.ZeroAddress;
    this.tokenContract = new ethers.Contract(
      tokenAddress,
      tokenJson.abi,
      this.wallet,
    );
  }

  getHello(): string {
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
    } catch (e) {
      return new BadRequestException('Err:WrongTokenCt', e);
    }
  }

  async getTokenAbi() {
    return tokenJson.abi;
  }

  async getTrackerAddress() {
    try {
      return this.trackerContract.target.toString();
    } catch (e) {
      return new BadRequestException('Err:WrongTrackerCt', e);
    }
  }

  async getTrackerAbi() {
    return trackerJson.abi;
  }

  async deployTokenContract(arg: any) {
    if (Object.keys(arg).length) {
      return new BadRequestException('Err:NoArgsPls');
    }
    const { abi, bytecode: code } = tokenJson;
    const ctFactory = new ethers.ContractFactory(abi, code, this.wallet);
    const contract = await ctFactory.deploy();
    await contract.waitForDeployment();
    const newCtAddr = await contract.getAddress();
    this.tokenContract = new ethers.Contract(newCtAddr, abi, this.wallet);
    return newCtAddr;
  }

  async setTrackerCtAddr({ address: trackerAddress }) {
    this.trackerContract = new ethers.Contract(
      trackerAddress,
      trackerJson.abi,
      this.wallet,
    );
    const tokenAddress = await this.trackerContract?.tokenContract();
    return { tokenAddress, trackerAddress };
  }

  async getTasksList() {
    try {
      const idCounter = await this.trackerContract.tokenIdCounter();
      const arr: object[] = [];

      for (let i = 0; i < Number(idCounter); i++) {
        const id = i;
        const task = await this.trackerContract.maintenanceTasks(id);
        const {
          clientName,
          systemName,
          maintenanceName,
          systemCycles,
          estimatedTime,
          startTime,
          cost,
          generalStatus,
          executionStatus,
          repairman,
          qualityInspector,
        } = task;

        const tokenId = i.toString();

        const taskCost = ethers.formatEther(cost.toString());
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
    } catch (e) {
      return new BadRequestException('Err:ProblemWithTrackerCt', e);
    }
  }
}
