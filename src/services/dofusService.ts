import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from '../config';
import { handleError } from '../utils/errorHandler';

export class DofusService {
    private baseURL: string;

    constructor(baseURL = API_BASE_URL) {
        this.baseURL = baseURL;
    }

    async fetchItems(language: string = 'en'): Promise<any[]> {
        try {
            const response = await axios.get(`${this.baseURL}/items`, {
                headers: { 'Accept-Language': language },
            });

            if (response.data && Array.isArray(response.data.data)) {
                return response.data.data;
            } else {
                throw new Error('API response format is not as expected.');
            }
        } catch (error) {
            handleError(error as AxiosError);
            return []; // Retourne un tableau vide en cas d'erreur
        }
    }


    async fetchItemById(id: number, language: string = 'en'): Promise<any> {
        try {
            const response = await axios.get(`${this.baseURL}/items/${id}`, {
                headers: { 'Accept-Language': language },
            });
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
        }
    }
    async fetchMonsters(language: string = 'en'): Promise<any[]> {
        try {
            const response = await axios.get(`${this.baseURL}/monsters`, {
                headers: { 'Accept-Language': language },
            });

            if (response.data && Array.isArray(response.data.data)) {
                return response.data.data;
            } else {
                throw new Error('API response format is not as expected.');
            }
        } catch (error) {
            handleError(error as AxiosError);
            return [];
        }
    }

    async fetchSets(language: string = 'en'): Promise<any[]> {
        try {
            const response = await axios.get(`${this.baseURL}/item-sets`, {
                headers: { 'Accept-Language': language },
            });

            if (response.data && Array.isArray(response.data.data)) {
                return response.data.data;
            } else {
                throw new Error('API response format is not as expected.');
            }
        } catch (error) {
            handleError(error as AxiosError);
            return [];
        }
    }

    async fetchSpells(language: string = 'en'): Promise<any[]> {
        try {
            const response = await axios.get(`${this.baseURL}/spells`, {
                headers: { 'Accept-Language': language },
            });

            if (response.data && Array.isArray(response.data.data)) {
                return response.data.data;
            } else {
                throw new Error('API response format is not as expected.');
            }
        } catch (error) {
            handleError(error as AxiosError);
            return [];
        }
    }
}
