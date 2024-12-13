import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { audit } from "src/shared/schemas/audit.scheam"; // Assuming this contains common fields like createdAt, updatedAt
import { slack_reports } from "./slack_reports.schema"; // Import slack_reports schema
import { relations } from "drizzle-orm";

// Define the slack_report_logs table
export const slack_report_logs = pgTable('slack_report_logs', {
  id: uuid().primaryKey().defaultRandom(),
  reportId: uuid().notNull(), // Foreign key to slack_reports
  logMessage: varchar({ length: 100 }).notNull(),
  ...audit
});

// Define the relations (Many-to-One relationship)
export const slackReportLogRelations = relations(slack_report_logs, ({ one }) => ({
  report: one(slack_reports, {
    fields: [slack_report_logs.reportId], // Field in slack_report_logs that references slack_reports
    references: [slack_reports.id], // Reference field in slack_reports
    relationName: "report", // Optional, provides a name to the relationship
  }),
}));
