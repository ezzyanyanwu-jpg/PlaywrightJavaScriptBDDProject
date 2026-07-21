import { test } from '../../api/fixtures/ApiFixture.js';
import { PostPayload } from '../../api/payloads/PostPayload.js';
import { ResponseHelper } from '../../api/helpers/ResponseHelper.js';

test('PUT Method API Testing', async ({ postsApi, assertions }) => {

    const payload = PostPayload.updatePost();
    const response = await postsApi.updatePost(1, payload);
    await assertions.verifyStatus(response, 200);
    const responseBody = await ResponseHelper.getJson(response);
    await assertions.verifyResponseValue(
        responseBody,
        'id',
        payload.id
    );

    await assertions.verifyResponseValue(
        responseBody,
        'title',
        payload.title
    );

});