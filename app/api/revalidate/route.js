import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get('secret');
    const slug = searchParams.get('slug');

    console.log('Received revalidation request:', { secret, slug });

    if (secret !== process.env.MY_SECRET_TOKEN) {
        console.error('Invalid token');
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    try {
        console.log(`Revalidating path: /${slug}`);
        // Revalidate the specified path at the root
        await revalidatePath(`/${slug}`);
        return NextResponse.json({ revalidated: true });
    } catch (err) {
        console.error('Error revalidating:', err);
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}
