import { PostService } from './05-dependency-b';
import { JsonPlaceholderDbService, LocalDataBaseService, localDbJsonService } from './05-dependency-c';


// Main
(async () => {

    const dbContextJson = new localDbJsonService();
    const dbContext = new LocalDataBaseService();
    const dbContextJP = new JsonPlaceholderDbService();

    const postService = new PostService(dbContextJP);

    const posts = await postService.getPosts();

    console.log({ posts })


})();