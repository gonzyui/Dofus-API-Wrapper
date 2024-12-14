import fs from 'fs';
import path from 'path';

const logFilePath = path.join(__dirname, '../../logs/dofusdb.log');

/* Make sure that logs file exists */
if (!fs.existsSync(path.dirname(logFilePath))) {
    fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
}

export class Logger {
    static log(message: string): void {
        const timestamp = new Date().toISOString();
        fs.appendFileSync(logFilePath, `[INFO] ${timestamp} - ${message}\n`);
        console.log(`[INFO] ${timestamp} - ${message}`);
    }

    static error(message: string): void {
        const timestamp = new Date().toISOString();
        fs.appendFileSync(logFilePath, `[ERROR] ${timestamp} - ${message}\n`);
        console.error(`[ERROR] ${timestamp} - ${message}`);
    }
}
