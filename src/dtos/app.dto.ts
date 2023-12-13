import { ApiProperty } from '@nestjs/swagger';

export class SetTrackerCtAddrDto {
  @ApiProperty({
    type: String,
    required: true,
    default: '0x0000000000000000000000000000000000000000',
  })
  address: string;
}

export class PayForTask {
  @ApiProperty({
    type: String,
    required: true,
    default: "0",
  })
  tokenId:string
  @ApiProperty({
    type: String,
    required: true,
    default: 'ipfs://QmdtibqnMFai8CwQ6qUUUkxhs4MAZNPnrx9h4Ncn5PyQpn',
  })
  url: string;
  
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
