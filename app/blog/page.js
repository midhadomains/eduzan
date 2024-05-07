import Script from 'next/script'
import { getPostList } from "../../lib/posts";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PostList from "../../components/PostList";

export const metadata = {
    title: 'Blog',
    description: 'Read travel stories...',
}

export default async function BlogHome({ params }) {
    const initialPosts = await getPostList();
    <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></Script>
    return (
        <>
            <div className="h-[50vh] min-h-[20rem] relative select-none">
                <div className="absolute bg-slate-900 inset-0 z-0 opacity-40"></div>
                <div className="">
                    <SiteHeader className="header-blog-home z-10 relative" />
                </div>
                <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">BLOG</h1>
                <p className="relative z-10 text-center text-slate-200 text-2xl">Read our latest articles</p>
            </div>
            <PostList initialPosts={initialPosts} />
            <SiteFooter />
        </>
    );
}