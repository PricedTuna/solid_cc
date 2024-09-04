import { DbContext, LocalDataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}

export class PostService {

    private posts: Post[] = [];

    constructor(public dbContext: DbContext) {}

    async getPosts() {
        const jsonDB = new LocalDataBaseService();
        this.posts = await this.dbContext.getAllPosts();

        return this.posts;
    }
}
