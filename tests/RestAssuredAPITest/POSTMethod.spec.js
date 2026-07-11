// @ts-check                                            
import { test, expect } from '@playwright/test';

test('POST Method API Testing', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {

        headers:{'Content-type': 'application/json; charset=UTF-8'},

        data:{
            title: 'This is a new post',
            body: 'This is a body',
            userId: 1,
        },
})
        expect(response.status()).toBe(201);
        console.log('POST status code:', response.status());

        const responseBody = await response.json();
        expect(responseBody.title).toBe("This is a new post");
        console.log('display the response body:', responseBody.title);
});