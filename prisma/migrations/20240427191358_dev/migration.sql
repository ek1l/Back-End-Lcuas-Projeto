-- CreateTable
CREATE TABLE "Formulario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "whatsappNumber" TEXT NOT NULL,
    "demaisNumeros" TEXT,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "ruaAvenida" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "prontoReferencia" TEXT,
    "assistenciaSaude" TEXT,
    "assistenciaFuneral" TEXT,
    "dependentes" TEXT,
    "mensalidade" TEXT NOT NULL,
    "valorAdesao" TEXT NOT NULL,
    "observacao" TEXT,
    "comprovantePix" TEXT,

    CONSTRAINT "Formulario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foto" (
    "id" TEXT NOT NULL,
    "formularioId" TEXT NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Foto_formularioId_key" ON "Foto"("formularioId");

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_formularioId_fkey" FOREIGN KEY ("formularioId") REFERENCES "Formulario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
