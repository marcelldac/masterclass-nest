/*
  Warnings:

  - You are about to drop the column `funcion` on the `RocketTeamMember` table. All the data in the column will be lost.
  - Added the required column `function` to the `RocketTeamMember` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RocketTeamMember" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "function" TEXT NOT NULL
);
INSERT INTO "new_RocketTeamMember" ("id", "name") SELECT "id", "name" FROM "RocketTeamMember";
DROP TABLE "RocketTeamMember";
ALTER TABLE "new_RocketTeamMember" RENAME TO "RocketTeamMember";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
