import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as multer from 'multer';
import { Request } from 'express';

@Injectable()
export class UploadService {
  private uploadDir = path.join(__dirname, '../../../uploads');

  constructor() {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  getMulterConfig(): multer.StorageEngine {
    return multer.diskStorage({
      destination: (
        req: Request,
        file: Express.Multer.File,
        cb: (error: Error | null, destination: string) => void,
      ) => {
        cb(null, this.uploadDir);
      },
      filename: (
        req: Request,
        file: Express.Multer.File,
        cb: (error: Error | null, filename: string) => void,
      ) => {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
      },
    });
  }
}
