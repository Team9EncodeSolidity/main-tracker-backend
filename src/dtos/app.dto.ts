import { ApiProperty } from '@nestjs/swagger';

export class SetTrackerCtAddrDto {
  @ApiProperty({
    type: String,
    required: true,
    default: '0x0000000000000000000000000000000000000000',
  })
  address: string;
}

export class DeployTrackerContract {
  @ApiProperty({
    type: String,
    required: true,
    default: '0x0000000000000000000000000000000000000000',
  })
  tokenAddress: string;
  @ApiProperty({
    type: String,
    required: true,
    default: '1000000000000000000',
  })
  ration: string;
}

export class GrantMintRole {
  @ApiProperty({
    type: String,
    required: true,
    default: '0x0000000000000000000000000000000000000000',
  })
  address: string;
}

export class TaskIdToComplete {
  @ApiProperty({
    type: String,
    required: true,
    default: '0',
  })
  id: string;
}

export class TaskIdToCertify {
  @ApiProperty({
    type: String,
    required: true,
    default: '0',
  })
  id: string;
}

export class OpenTask {
  @ApiProperty({ type: String, required: true, default: '', })
  clientName: string;

  @ApiProperty({ type: String, required: true, default: '', })
  systemName: string;

  @ApiProperty({ type: String, required: true, default: '', })
  maintenanceName: string;

  @ApiProperty({ type: String, required: true, default: '0', })
  systemCycles: string;

  @ApiProperty({ type: String, required: true, default: '0', })
  estimatedTime: string;

  @ApiProperty({ type: String, required: true, default: '0', })
  startTime: string;

  @ApiProperty({ type: String, required: true, default: '1', })
  cost: string;

  @ApiProperty({ type: String, required: true, default: '0x00000000000000000000000000000000000000000', })
  repairman: string;

  @ApiProperty({ type: String, required: true, default: '0x0000000000000000000000000000000000000000', })
  qualityInspector: string;
}