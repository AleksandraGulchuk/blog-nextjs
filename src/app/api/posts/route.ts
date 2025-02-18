// import { sql } from '@vercel/postgres';
import {NextResponse} from 'next/server';
import {connectToDB} from '@/app/lib/data';
import {auth} from '../../../../auth.config';

export async function GET() {
    try {
        const client = await connectToDB();
        if (!client) {
            throw new Error('Database client is undefined');
        }
        const posts = await client.sql`SELECT *
                                       FROM posts
                                       ORDER BY date DESC LIMIT 2;`;
        return NextResponse.json({posts}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}

export async function POST(request: Request) {
    const session = await auth();
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    const title = searchParams.get('title');
    const content = searchParams.get('content');
    const date = searchParams.get('date');
    const author = searchParams.get('author');

    try {
        const client = await connectToDB();
        if (!client) {
            throw new Error('Database client is undefined');
        }
        if (!session) {
            return NextResponse.json({message: 'User not authenticated'}, {status: 401});
        }
        await client.sql`INSERT INTO posts (id, author, title, content, date)
                         VALUES (${id}, ${author}, ${title}, ${content}, ${date});`;
        return NextResponse.json({message: 'Post successfully created'}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}

