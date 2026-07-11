// @ts-check                                            
import { test, expect } from '@playwright/test';

//PUT is used to update full record of a user - e.g id, title, body, userid
test('DELETE Method API Testing', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200)
    
    const responseBody = await response.headers();
    expect(responseBody['content-type']).toContain('application/json');

});