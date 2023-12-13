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
