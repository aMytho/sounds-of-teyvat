-- CreateTable
CREATE TABLE "covers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "performanceUrl" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "covers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "covers" ADD CONSTRAINT "covers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
