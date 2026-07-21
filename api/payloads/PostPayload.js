import apiData from '../../testdata/apiData.json' with { type: 'json' };

export class PostPayload {

    static getPost() {

        return apiData.get;

    }

    static createPost() {

        return apiData.post;

    }

    static updatePost() {

        return apiData.put;

    }

    static patchPost() {

        return apiData.patch;

    }

    static deletePost() {

        return apiData.delete;

    }

}