import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schemas from 'src/db/schemas';
import { slackReportSendMessageDto } from "../dto/slack.dto";
import { slack_reports } from "src/db/schemas/slack_reports.schema";
import { WebClient } from "@slack/web-api";

@Injectable()
export class SlackService {
  private readonly slackClient: WebClient;

  constructor(
    @Inject('DATABASE_CONNECTION')
    protected readonly db: NodePgDatabase<typeof schemas>,
  ) {
    const slackToken = process.env.SLACK_BOT_TOKEN;
    this.slackClient = new WebClient(slackToken);
  }

  async sendMessage(
    message: slackReportSendMessageDto
  ): Promise<string> {
  
    const store = await this.db.insert(slack_reports).values({
      reportName: message.reportName,
      generatedAt: new Date(), 
      reportData: message.reportData, 
      status:'Pending',
      text:message.text || null,
      errorMessage: message.errorMessage || null, 
    })

    if (store.length > 0 && store[0].errorMessage) {
      return `Error: ${store[0].errorMessage}`;
    }
if(!store){
  throw new BadRequestException('Report Not Inserted Bro!')
}
    try {
      const slackResponse = await this.slackClient.chat.postMessage({
        channel: process.env.SLACK_CHANNEL_ID, 
        text: message.text || 'No message provided', 
        attachments: [{
          text: `Report Name: ${message.reportName}\nGenerated At: ${message.generatedAt}\nStatus:`,
        }],
      });
      return `Message sent successfully to Slack. Message ID: ${slackResponse.ts}`;
    } catch (error) {

      // await this.db.update(slack_reports).set({
      //   status:'Failed',
      //   errorMessage:error.message
      // }).where({id:store.id})

      console.error('Error sending Slack message:', error);
      return `Failed to send message to Slack: ${error.message}`;
    }
  }
}
