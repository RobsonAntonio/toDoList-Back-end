-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listTarefas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "tarefasId" TEXT NOT NULL,

    CONSTRAINT "listTarefas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "listTarefas" ADD CONSTRAINT "listTarefas_tarefasId_fkey" FOREIGN KEY ("tarefasId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
