"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logFilePath = path_1.default.join(__dirname, '../../logs/dofusdb.log');
// Assurez-vous que le répertoire de logs existe
if (!fs_1.default.existsSync(path_1.default.dirname(logFilePath))) {
    fs_1.default.mkdirSync(path_1.default.dirname(logFilePath), { recursive: true });
}
class Logger {
    static log(message) {
        const timestamp = new Date().toISOString();
        fs_1.default.appendFileSync(logFilePath, `[INFO] ${timestamp} - ${message}\n`);
        console.log(`[INFO] ${timestamp} - ${message}`);
    }
    static error(message) {
        const timestamp = new Date().toISOString();
        fs_1.default.appendFileSync(logFilePath, `[ERROR] ${timestamp} - ${message}\n`);
        console.error(`[ERROR] ${timestamp} - ${message}`);
    }
}
exports.Logger = Logger;
