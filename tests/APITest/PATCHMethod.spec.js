import { test } from '../../api/fixtures/ApiFixture.js';
import { PostPayload } from '../../api/payloads/PostPayload.js';
import { ResponseHelper } from '../../api/helpers/ResponseHelper.js';
import apiData from '../../testdata/apiData.json' with { type: 'json' };

test('PATCH Method API Testing', async ({ postsApi, assertions }) => {

    const payload = PostPayload.patchPost();
    const response = await postsApi.patchPost(1, payload);
    await assertions.verifyStatus(response, 200);
    const responseBody = await ResponseHelper.getJson(response);
    await assertions.verifyResponseValue(
        responseBody,
        'title',
        payload.title
    );

});