//This class is only responsible for sending HTTP requests.
import { ENV } from '../../config/env.js';

export class ApiClient {

    constructor(request) {
        this.request = request;
    }
    
    async get(url) {
        return await this.request.get(`${ENV.apiBaseURL}${url}`);
    }

    async post(url, payload) {
        return await this.request.post( `${ENV.apiBaseURL}${url}`, payload);
    }

    async put(url, payload) {
        return await this.request.put( `${ENV.apiBaseURL}${url}`, payload);
    }

    async patch(url, payload) {
        return await this.request.patch( `${ENV.apiBaseURL}${url}`, payload);
    }

    async delete(url) {
        return await this.request.delete( `${ENV.apiBaseURL}${url}`);
    }
}