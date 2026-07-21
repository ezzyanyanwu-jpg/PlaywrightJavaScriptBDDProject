// Note: The HTTP tests no longer contain endpoint paths, HTTP details, or request configuration. 
// That responsibility is centralized in PostsAPI and ApiClient, making future changes much easier.

import { test } from '../../api/fixtures/ApiFixture.js';
import { PostPayload } from '../../api/payloads/PostPayload.js';
import { ResponseHelper } from '../../api/helpers/ResponseHelper.js';
import apiData from '../../testdata/apiData.json' with { type: 'json' };

test('GET Method API Testing', async ({ postsApi, assertions }) => {

    const response = await postsApi.getPost(apiData.get.postId);
    await assertions.verifyStatus(response, 200);
    const responseBody = await ResponseHelper.getJson(response);
    await assertions.verifyResponseValue(
        responseBody,
        'userId',
        apiData.get.expectedUserId
    );

    await assertions.verifyResponseValue(
        responseBody,
        'title',
        apiData.get.expectedTitle
    );

});

test('Asserting Complex Json Response', async ({ postsApi, assertions }) => {

    const response = await postsApi.getAllPosts();
    await assertions.verifyResponseOk(response);
    const posts = await ResponseHelper.getJson(response);
    await assertions.verifyCollectionSizeGreaterThan(posts, 0);
    await assertions.verifyResponseValue(
        posts[0],
        'id',
        1
    );

    console.log(posts[0]);

});