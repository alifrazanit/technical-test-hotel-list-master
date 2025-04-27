/*
  Warnings:

  - You are about to drop the column `image` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `hotel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hotel" DROP COLUMN "image",
DROP COLUMN "price";
