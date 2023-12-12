import { ApiProperty } from '@nestjs/swagger';

export class SetTrackerCtAddrDto {
  @ApiProperty({
    type: String,
    required: true,
    default: '0x0000000000000000000000000000000000000000',
  })
  address: string;
}
