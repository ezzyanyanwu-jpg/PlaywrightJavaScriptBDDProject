// @ts-check                                            
import { test, expect } from '@playwright/test';

//PUT is used to update full record of a user - e.g id, title, body, userid
test('API Chaining', async ({ request }) => {

    // Get all posts
    const postsResponse = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(postsResponse.status()).toBe(200)

    // Parse response body to json
    const firstPost = await postsResponse.json();

    // Get comments from the the selected post
    const commentsResponse = await request.get(`https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`)
    expect(commentsResponse.status()).toBe(200)
      
    const comments = await commentsResponse.json();
    expect(comments.length).toBeGreaterThan(0);
    expect(comments[0].postId).toBe(firstPost.id);
    console.log(comments[0])

});