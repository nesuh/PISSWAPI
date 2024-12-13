import { IsDate, IsString, IsObject } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class slackReportSendMessageDto {
  @ApiProperty()
  @IsString()
  reportName: string;

  @ApiProperty()
  @IsDate()
  generatedAt: Date;

  @ApiProperty()
  @IsObject() // Ensures that the reportData is an object (JSON format)
  reportData: object; // Change this to object for JSON data

  @ApiProperty()
  @IsString()
  text?: string;

  @ApiProperty()
  @IsString()
  errorMessage?: string;
}

export class slackReportLogsSendMessageDto{
    @ApiProperty()
    
    @ApiProperty()
    @IsString()
    logMessage:string
}