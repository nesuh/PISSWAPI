import { Module } from '@nestjs/common';
import { SlackModule } from './modules/slack.modle';

@Module({
  imports: [SlackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
