"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DofusService = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const errorHandler_1 = require("../utils/errorHandler");
class DofusService {
    constructor(baseURL = config_1.API_BASE_URL) {
        this.baseURL = baseURL;
    }
    fetchItems() {
        return __awaiter(this, arguments, void 0, function* (language = 'en') {
            try {
                const response = yield axios_1.default.get(`${this.baseURL}/items`, {
                    headers: { 'Accept-Language': language },
                });
                if (response.data && Array.isArray(response.data.data)) {
                    return response.data.data;
                }
                else {
                    throw new Error('API response format is not as expected.');
                }
            }
            catch (error) {
                (0, errorHandler_1.handleError)(error);
                return []; // Retourne un tableau vide en cas d'erreur
            }
        });
    }
    fetchItemById(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, language = 'en') {
            try {
                const response = yield axios_1.default.get(`${this.baseURL}/items/${id}`, {
                    headers: { 'Accept-Language': language },
                });
                return response.data;
            }
            catch (error) {
                (0, errorHandler_1.handleError)(error);
            }
        });
    }
    fetchMonsters() {
        return __awaiter(this, arguments, void 0, function* (language = 'en') {
            try {
                const response = yield axios_1.default.get(`${this.baseURL}/monsters`, {
                    headers: { 'Accept-Language': language },
                });
                if (response.data && Array.isArray(response.data.data)) {
                    return response.data.data;
                }
                else {
                    throw new Error('API response format is not as expected.');
                }
            }
            catch (error) {
                (0, errorHandler_1.handleError)(error);
                return [];
            }
        });
    }
    fetchSets() {
        return __awaiter(this, arguments, void 0, function* (language = 'en') {
            try {
                const response = yield axios_1.default.get(`${this.baseURL}/item-sets`, {
                    headers: { 'Accept-Language': language },
                });
                if (response.data && Array.isArray(response.data.data)) {
                    return response.data.data;
                }
                else {
                    throw new Error('API response format is not as expected.');
                }
            }
            catch (error) {
                (0, errorHandler_1.handleError)(error);
                return [];
            }
        });
    }
    fetchSpells() {
        return __awaiter(this, arguments, void 0, function* (language = 'en') {
            try {
                const response = yield axios_1.default.get(`${this.baseURL}/spells`, {
                    headers: { 'Accept-Language': language },
                });
                if (response.data && Array.isArray(response.data.data)) {
                    return response.data.data;
                }
                else {
                    throw new Error('API response format is not as expected.');
                }
            }
            catch (error) {
                (0, errorHandler_1.handleError)(error);
                return [];
            }
        });
    }
}
exports.DofusService = DofusService;
