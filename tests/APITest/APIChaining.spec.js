import { test } from '../../api/fixtures/ApiFixture.js';
import { PostPayload } from '../../api/payloads/PostPayload.js';
import { ResponseHelper } from '../../api/helpers/ResponseHelper.js';
import apiData from '../../testdata/apiData.json' with { type: 'json' };

test('API Chaining', async ({ postsApi, assertions }) => {

    const postResponse = await postsApi.getPost(apiData.get.postId);

    await assertions.verifyStatus(postResponse, 200);

    const post = await ResponseHelper.getJson(postResponse);

    const commentsResponse =
        await postsApi.getComments(post.id);

    await assertions.verifyStatus(commentsResponse, 200);

    const comments = await ResponseHelper.getJson(commentsResponse);

    await assertions.verifyCollectionSizeGreaterThan(comments, 0);

    await assertions.verifyResponseValue(
        comments[0],
        'postId',
        post.id
    );

});