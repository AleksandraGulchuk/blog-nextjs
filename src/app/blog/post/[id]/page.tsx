// import { posts } from '@/app/lib/placeholder-data';
import {getPosts} from '@/app/lib/data';
import Post from '@/app/ui/components/posts/Post';
import {notFound} from "next/navigation";
import styles from "@/app/ui/styles/home.module.css";

export default async function Page({params}: { params: { id: string } }) {
    const posts = await getPosts();
    const post = posts?.find((post) => post.id === params.id);
    if (!post) {
        notFound();
    }
    return (
        <>
            <h1 className="text-2xl mb-4 text-purple-700">Post</h1>
            {post && <Post id={''} title={''} content={''} date={''} {...post} />}
            <a href="/blog/posts"
               className={`outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-auto ${styles.fit_content}`}>
                Back to Posts
            </a>
        </>)
}