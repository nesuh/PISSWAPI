CREATE TYPE "public"."slack_reports" AS ENUM('COMPLETED', 'FAILED', 'PENDING');--> statement-breakpoint
ALTER TABLE "slack_reports" DROP CONSTRAINT "slack_reports_reportName_unique";--> statement-breakpoint
ALTER TABLE "slack_reports" ALTER COLUMN "reportName" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "slack_reports" ALTER COLUMN "generatedAt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "slack_reports" ALTER COLUMN "reportData" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "slack_reports" ALTER COLUMN "status" SET DATA TYPE slack_reports;--> statement-breakpoint
ALTER TABLE "slack_reports" ALTER COLUMN "status" SET DEFAULT 'PENDING';