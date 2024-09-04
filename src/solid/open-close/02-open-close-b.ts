import axios from 'axios';
import { HttpClient } from './02-open-close-c';


export class TodoService { 

    constructor(private httpClient: HttpClient){}

    async getTodoItems() {
        const { data } = await this.httpClient.get('/todos/');
        return data;
    }
}


export class PostService {

    constructor(private httpClient: HttpClient){}

    async getPosts() {
        const { data } = await this.httpClient.get('/posts');
        return data;
    }
}


export class PhotosService {

    constructor(private httpClient: HttpClient){}

    async getPhotos() {
        const { data } = await this.httpClient.get('/photos');
        return data;
    }

}