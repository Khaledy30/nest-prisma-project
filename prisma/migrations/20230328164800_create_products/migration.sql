-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ean" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "products_ean_key" ON "products"("ean");
