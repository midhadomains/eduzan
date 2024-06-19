'use client';
import Link from "next/link";
import LoadMore from "./LoadMore";
import { useState } from "react";
import BlogCard from "./BlogCard";

export default function PostList({ initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);

    return (
        <main>
            <section className="mx-auto lg:max-w-[1400px] px-[20px] md:px-[50px] my-[50px] ">
                <div className="flex flex-wrap gap-[20px] justify-around">
                    {posts.nodes.map((post) => (
                        <BlogCard post={post} key={post.slug} />
                    ))}
                </div>
                <div className="py-4 text-center">
                    <LoadMore posts={posts} setPosts={setPosts} />
                </div>
            </section>
        </main>
    );
}
