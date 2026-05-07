-- CreateEnum
CREATE TYPE "LeadServiceNeeded" AS ENUM ('WEBSITE_DEVELOPMENT', 'WEB_APPLICATION_DEVELOPMENT', 'MOBILE_APP_DEVELOPMENT', 'MVP_DEVELOPMENT');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'CLOSED');

-- CreateEnum
CREATE TYPE "LeadSource" AS ENUM ('WEB');

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "serviceNeeded" "LeadServiceNeeded" NOT NULL,
    "budgetRange" TEXT,
    "timeline" TEXT NOT NULL,
    "referenceLinks" TEXT,
    "message" TEXT NOT NULL,
    "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
    "source" "LeadSource" NOT NULL DEFAULT 'WEB',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_email_idx" ON "Lead"("email");
