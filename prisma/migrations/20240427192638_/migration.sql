-- DropForeignKey
ALTER TABLE "Foto" DROP CONSTRAINT "Foto_formularioId_fkey";

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_formularioId_fkey" FOREIGN KEY ("formularioId") REFERENCES "Formulario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
