import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar, jsonb, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { ReportStatus } from "src/shared/enums";
import { audit } from "src/shared/schemas/audit.scheam";
export const statusEnum = pgEnum('slack_reports', [ReportStatus.Completed, ReportStatus.Failed, ReportStatus.Pending])
export const slack_reports = pgTable('slack_reports', {
  id: uuid().primaryKey().defaultRandom(),
  reportName: varchar({ length: 100 }),
  generatedAt: timestamp(), 
  reportData: jsonb(),
  status: statusEnum().notNull().default(ReportStatus.Pending),
  text:varchar({length:250}),
  errorMessage: varchar({ length: 100 }),
  ...audit
});
