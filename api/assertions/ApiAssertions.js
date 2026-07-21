import { expect } from '@playwright/test';
import { Logger } from '../../utilities/Logger.js';

export class ApiAssertions {

    async verifyStatus(response, expectedStatus) {
        Logger.info(`Verifying Status Code: ${expectedStatus}`);
        expect(response.status()).toBe(expectedStatus);
    }
        async verifyResponseOk(response) {
        Logger.info("Verifying Response OK");
        expect(response.ok()).toBeTruthy();
    }

    async verifyHeader(response, headerName, expectedValue) {
        Logger.info(`Verifying Header: ${headerName}`);
        const headers = response.headers();
        expect(headers[headerName]).toContain(expectedValue);

    }

    async verifyResponseValue(responseBody, field, expectedValue) {
        Logger.info(`Verifying ${field}`);
        expect(responseBody[field]).toBe(expectedValue);
    }

    async verifyResponseContains(responseBody, field, expectedValue) {
        Logger.info(`Verifying ${field} contains expected value`);
        expect(responseBody[field]).toContain(expectedValue);

    }

    async verifyCollectionSizeGreaterThan(collection, expectedSize) {
    Logger.info(`Verifying collection size is greater than ${expectedSize}`);
    expect(collection.length).toBeGreaterThan(expectedSize);

    }
    

    async verifyObjectExists(object) {
        Logger.info("Verifying Response Object");
        expect(object).toBeDefined();

    }

}