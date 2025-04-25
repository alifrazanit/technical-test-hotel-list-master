-- CreateTable
CREATE TABLE "hotel" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hotel_pkey" PRIMARY KEY ("id")
);
