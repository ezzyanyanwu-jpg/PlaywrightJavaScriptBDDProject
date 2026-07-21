import { test } from '../../api/fixtures/ApiFixture.js';
import { PostPayload } from '../../api/payloads/PostPayload.js';
import { ResponseHelper } from '../../api/helpers/ResponseHelper.js'; // later helper class use
import apiData from '../../testdata/apiData.json' with { type: 'json' };

test('DELETE Method API Testing', async ({ postsApi, assertions }) => {

    const response = await postsApi.deletePost(apiData.delete.postId);

    await assertions.verifyStatus(response, 200);

    await assertions.verifyHeader(
        response,
        'content-type',
        'application/json'
    );

});