CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(100),
	"phoneNumber" varchar(100) NOT NULL,
	"password" varchar(100) NOT NULL,
	"firstName" varchar(100) NOT NULL,
	"lastName" varchar(100) NOT NULL,
	"baptismName" varchar(100),
	"updatedAt" timestamp,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"deletedAt" timestamp,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_phoneNumber_unique" UNIQUE("phoneNumber")
);
--> statement-breakpoint
CREATE TABLE "slack_reports" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"reportName" varchar(100) NOT NULL,
	"generatedAt" timestamp NOT NULL,
	"reportData" jsonb NOT NULL,
	"status" varchar(100) NOT NULL,
	"text" varchar(250),
	"errorMessage" varchar(100),
	"updatedAt" timestamp,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"deletedAt" timestamp,
	CONSTRAINT "slack_reports_reportName_unique" UNIQUE("reportName")
);
--> statement-breakpoint
CREATE TABLE "slack_report_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"reportId" uuid NOT NULL,
	"logMessage" varchar(100) NOT NULL,
	"updatedAt" timestamp,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"deletedAt" timestamp
);
