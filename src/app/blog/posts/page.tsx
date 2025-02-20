import Link from "next/link"
import {Button} from "@/app/ui/components/button"
// import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import {getPosts} from '@/app/lib/data';
import {auth} from '../../../../auth.config'


export default async function Page() {
    const posts = await getPosts();
    const session = await auth();

    return (
        <>
            {
                session?.user &&
                <Link href="/blog/post/insert"><Button
                    className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New
                    +</Button></Link>
            }
            <h1 className="text-purple-800">Posts</h1>
            {posts?.map((post) => <Post id={""} title={""} content={""} date={""} key={post.id} {...post} />)}
        </>)
}