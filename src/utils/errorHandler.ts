import { AxiosError } from 'axios';
import { Logger } from './logger';

export function handleError(error: AxiosError): void {
    if (error.response) {
        Logger.error(
            `API Error: ${error.response.status} - ${error.response.statusText}\nDetails: ${JSON.stringify(error.response.data)}`
        );
    } else if (error.request) {
        Logger.error(`No response received from API: ${error.request}`);
    } else {
        Logger.error(`Error setting up the request: ${error.message}`);
    }
    process.exit(1); /* Stop execution in case of a fatal error */
}
