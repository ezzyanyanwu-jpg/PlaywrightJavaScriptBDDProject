// @ts-check                                            
import { test, expect } from '@playwright/test';

test('GET Method API Testing', async ({ request }) => {             

    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const response = await request.get(url)
    expect(response.status()).toBe(200)
    
    const responseBody = await response.json()
    expect(responseBody.userId).toBe(1)
    expect(responseBody.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");

});

test('Asserting Complex Json Response', async({request}) => {             
    test.setTimeout(5000);

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await request.get(url);

    expect(response).toBeOK();
    const users = await response.json();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0].id).toBe(1);
    console.log(users[0]);
});