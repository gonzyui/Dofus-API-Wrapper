"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
const logger_1 = require("./logger");
function handleError(error) {
    if (error.response) {
        logger_1.Logger.error(`API Error: ${error.response.status} - ${error.response.statusText}\nDetails: ${JSON.stringify(error.response.data)}`);
    }
    else if (error.request) {
        logger_1.Logger.error(`No response received from API: ${error.request}`);
    }
    else {
        logger_1.Logger.error(`Error setting up the request: ${error.message}`);
    }
    process.exit(1); // Stop execution in case of a fatal error
}
