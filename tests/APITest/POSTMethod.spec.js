import { test } from '../../api/fixtures/ApiFixture.js';
import { PostPayload } from '../../api/payloads/PostPayload.js';
import { ResponseHelper } from '../../api/helpers/ResponseHelper.js';

test('POST Method API Testing', async ({ postsApi, assertions }) => {

    const payload = PostPayload.createPost();
    const response = await postsApi.createPost(payload);
    await assertions.verifyStatus(response, 201);
    const responseBody = await ResponseHelper.getJson(response);
    await assertions.verifyResponseValue(
        responseBody,
        'title',
        payload.title
    );

});