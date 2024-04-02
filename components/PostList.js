'use client';
import Link from "next/link";
import FeaturedImage from "./FeaturedImage";
import Date from "./Date";
import LoadMore from "./LoadMore";
import { useState } from "react";
import AllPostFeaturedImage from "./AllPostFeaturedImage";

export default function PostList({ initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);
    return (
        <main className="flex">
            <div>
                {
                    posts.nodes.map((post) => {
                        return (
                            <h2 key={post.slug} className="py-4">
                                <Link  href={`/blog/${post.slug}`} className="text-blue-400 text-2xl hover:text-blue-600">{post.title}</Link>
                            </h2>
                        )
                    })
                }
            </div>
            <section className="grid  sm:grid-cols-1 mx-auto lg:max-w-5xl post-list mt-4">
                <ul>
                    {
                        posts.nodes.map((post) => (
                            <li key={post.slug} className="w-fit ">
                                <div className="">
                                    <AllPostFeaturedImage post={post} />
                                </div>
                                <div className="mx-auto ">
                                    <h2 className="py-4">
                                        <Link href={`/blog/${post.slug}`} className="text-blue-400 text-2xl hover:text-blue-600">{post.title}</Link>
                                    </h2>
                                    <div className="py-4">
                                        Published on <Date dateString={post.date} />
                                    </div>
                                    <div className="text-lg" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                                    <div className="py-4">
                                        Posted under {
                                            post.categories.nodes.map((category) => (
                                                <Link className="text-blue-400 hover:text-blue-500" href={`/category/${category.slug}`} key={category.slug}>
                                                    {category.name}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="py-4 text-center">
                    <LoadMore posts={posts} setPosts={setPosts} />
                </div>

            </section>
            
        </main>
    )


}