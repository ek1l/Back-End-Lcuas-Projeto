import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Configuração para armazenamento no disco com criação de diretório
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/';
    // Se o diretório não existir, crie-o
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Cria diretório se não existir
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const filename = `${file.fieldname}-${uniqueSuffix}${extension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });
export default upload;
