import {createClient} from "@vercel/postgres";

export async function connectToDB() {
    const client = createClient();
    await client.connect();

    try {
        if (client) {
            console.log('Connected to database');
            return client;
        }
    } catch (err) {
        console.error('Error connecting to database', err);
    }
}

export async function getPosts() {
    try {
        const client = await connectToDB();
        if (!client) {
            throw new Error('Database client is undefined');
        }
        const data = await client.sql`SELECT * FROM posts;`;
        // console.log(data.rows);
        return data.rows;
    } catch (err) {
        console.error('Error getting posts', err);
    }
}