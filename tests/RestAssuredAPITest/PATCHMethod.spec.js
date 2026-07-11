// @ts-check                                            
import { test, expect } from '@playwright/test';

//PATCH is used to update partial record of a user - e.g title only instead of whole record
test('PATCH Method API Testing', async ({ request }) => {

    const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {

        headers: {'Content-Type': 'application/json; charset=UTF-8',
        },
        
        data: {
        
            'title': 'foo',
           
        },
    })
    expect(response.status()).toBe(200);
    console.log('Display the status code:', response.status());
    
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.title).toBe("foo");
    expect(responseBody.id).toBe(1);

});