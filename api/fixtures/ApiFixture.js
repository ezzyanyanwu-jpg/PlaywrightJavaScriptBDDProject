import { test as base } from '@playwright/test';
import { PostsAPI } from '../endpoints/PostsAPI.js';
import { ApiAssertions } from '../assertions/ApiAssertions.js';

export const test = base.extend({

    postsApi: async ({ request }, use) => {
        await use(new PostsAPI(request));
    },

    assertions: async ({}, use) => {
        await use(new ApiAssertions());
    }

});

export { expect } from '@playwright/test';