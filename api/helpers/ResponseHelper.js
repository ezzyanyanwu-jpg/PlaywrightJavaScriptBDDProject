import { Logger } from '../../utilities/Logger.js';

export class ResponseHelper {

    static async getJson(response) {
        Logger.info("Parsing JSON Response");
        return await response.json();
    }

    static async getText(response) {
        Logger.info("Parsing Text Response");
        return await response.text();
    }

}