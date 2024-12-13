import { Module } from "@nestjs/common";
import { SlackService } from "./service/slack.service";
import { SlackController } from "./controller/slack.controller";
import { DatabaseModule } from "src/db/database.module";

@Module({
imports:[DatabaseModule],
providers:[SlackService],
controllers:[SlackController],
exports:[]
})
export  class SlackModule{}