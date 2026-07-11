// @ts-check                                            
import { test, expect } from '@playwright/test';

//PUT is used to update full record of a user - e.g id, title, body, userid
test('PUT Method API Testing', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {

        headers: {'Content-Type': 'application/json; charset=UTF-8',
        },
        
        data: {
            'id': 1,
            'title': 'foo',
            'body': 'bar',
            'userId': 1,
        },
    })
    expect(response.status()).toBe(200);
    console.log('Display the status code:', response.status());
    
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.id).toBe(1);
    

});