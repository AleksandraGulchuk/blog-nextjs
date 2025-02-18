// import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import {getPosts} from '@/app/lib/data';

export default async function Page() {

    const posts = await getPosts();
    return (
        <>
            {/*{client && <p className='text-green-500'>Connected to database</p>}*/}
            <h1>Posts</h1>
            {posts?.map((post) => <Post id={''} title={''} content={''} date={''} key={post.id} {...post} />)}
        </>)
}