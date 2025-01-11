-- CreateTable
CREATE TABLE "PlaneCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planeModelId" INTEGER NOT NULL,
    "regristration" TEXT,
    "airline" TEXT,
    CONSTRAINT "PlaneCard_planeModelId_fkey" FOREIGN KEY ("planeModelId") REFERENCES "PlaneModel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PlaneModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icao" TEXT NOT NULL,
    "model" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "PlaneModel_icao_key" ON "PlaneModel"("icao");
