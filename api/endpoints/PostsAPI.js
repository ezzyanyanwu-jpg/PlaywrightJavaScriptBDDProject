// This class is the equivalent of Page Objects in UI test automation.
import { ApiClient } from '../client/ApiClient.js';

export class PostsAPI {

    constructor(request) {
        this.api = new ApiClient(request);
    }

    async getPost(id) {
        return await this.api.get(`/posts/${id}`);
    }

    async getAllPosts() {
        return await this.api.get('/posts');
    }

    async getComments(postId) {
        return await this.api.get(`/posts/${postId}/comments`);
    }

    async createPost(postData) {
        return await this.api.post('/posts', {

            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: postData
        });

    }

    async updatePost(id, postData) {
        return await this.api.put(`/posts/${id}`, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: postData
        });

    }

    async patchPost(id, postData) {

        return await this.api.patch(`/posts/${id}`, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: postData
        });

    }

    async deletePost(id) {
        return await this.api.delete(`/posts/${id}`);
    }
}