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
    "observacao" TEXT NOT NULL,

    CONSTRAINT "Formulario_pkey" PRIMARY KEY ("id")
);
