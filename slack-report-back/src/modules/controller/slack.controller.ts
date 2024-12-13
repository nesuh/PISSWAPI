import { Body, Controller, Post } from "@nestjs/common";
import { SlackService } from "../service/slack.service";
import { ApiTags } from "@nestjs/swagger";
import { slackReportSendMessageDto } from "../dto/slack.dto";

@Controller('slack')
@ApiTags('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @Post('send-message')
  @ApiTags('send-message')
  async sendMessage(
    @Body() message: slackReportSendMessageDto
  ): Promise<string> {
    // Call the service method
    return await this.slackService.sendMessage(message);
  }
}
