import Script from 'next/script'
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import CommentForm from "../../../components/CommentForm";
import { getPostSlugs, getSinglePost } from "../../../lib/posts";
import { getComments } from "../../../lib/comments";
import Date from "../../../components/Date";
import { Rubik, Roboto_Slab } from 'next/font/google';
// import { getSeo } from "../../../lib/seo";
import Image from 'next/image'
const rubik = Rubik({ subsets: ['latin'], display: 'swap' });
const roboto_slab = Roboto_Slab({ subsets: ['latin'], display: 'swap' });


export async function generateStaticParams() {
    const postSlugs = await getPostSlugs();

    const paths = postSlugs.map((s) => (
        {
            postSlug: s.slug
        }
    ));

    return paths
}

// export async function generateMetadata({ params }) 
//     const seoData = await getSeo('post', params.postSlug) ;
//     return {
//         title: seoData.title,
//         description: seoData.metaDesc,
//         openGraph: {
//             title: seoData.opengraphTitle,
//             description: seoData.metaDesc,
//             images: [seoData.opengraphImage.mediaItemUrl],
//             url: seoData.opengraphImage.mediaItemUrl,
//             locale: 'en_IN',
//             type: seoData.opengraphType,
//             siteName: seoData.opengraphSiteName,
//         }
//     }
// }

export default async function Post({ params }) {
    const postData = await getSinglePost(params.postSlug);
    const { comments, commentCount } = await getComments(params.postSlug);
    // const seoData = await getSeo('post', params.postSlug);
    
    let featuredImageUrl = "https://eduzan.vercel.app/_next/image?url=https%3A%2F%2Fapi.eduzan.com%2Fwp-content%2Fuploads%2F2024%2F02%2F1000_F_139351526_v7tjTuoD8dOK54NLPbtrfqb1RmhsbJgM-300x169.jpg&w=640&q=75";
    if (postData?.featuredImage) {
        featuredImageUrl = "url(" + postData.featuredImage.node.mediaDetails.sizes[1].sourceUrl + ")";
    }
    // console.log(postData.featuredImage.node.mediaDetails.sizes)
    // console.log(comments);
    // let jsonSchema = seoData.schema.raw.replace(/https:\/\/www.midhafin.com(?!\/wp-content\/uploads)/g, 'https://www.midhafin.com/blog') 
    
    return (
        <>
            {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonSchema }}></script> */}
            <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></Script>
            <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


            <section className="bg-slate-700 bg-opacity-70 absolute w-full z-20">
                <SiteHeader className="header-single-post z-10 relative" />
            </section>
            <article className={`${rubik.className} font-light`}>
                <section className="hero-area h-[70vh] min-h-[30rem] bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: featuredImageUrl }}>
                    <div className="absolute inset-0 bg-slate-900 opacity-40"></div>

                    <div className="container mx-auto h-full flex flex-col justify-center lg:max-w-4xl">
                        <h1 className={`${roboto_slab.className} text-6xl font-normal text-slate-100 relative z-10 py-8 mt-12`}>{postData.title}</h1>

                        <div className="pb-4 text-slate-100 z-10">
                            Posted by Micky , last updated on <Date dateString={postData.modified} />
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: postData.excerpt }} className="relative z-10 text-left text-slate-200 text-2xl pl-4 border-l-4 border-lime-200" />

                    </div>
                </section>
                <section className="content-area py-8">
                    <div dangerouslySetInnerHTML={{ __html: postData.content }} className="post-content container lg:w-[80%] mx-auto" />
                </section>
            </article>
            <div className="container mx-auto lg:max-w-4xl">
                <h3 className="text-xl py-2 my-4 border-l-4 border-l-lime-300 pl-4">{commentCount ? commentCount : 'No'} comments on this post so far:</h3>
                <CommentForm postId={postData.databaseId} />
            </div>

            <div className="container mx-auto lg:max-w-4xl">

                <section>
                    <ul>
                        {
                            comments.nodes.map((comment) => (
                                <li key={comment.id} className="pb-4 border-b">
                                    <div className="comment-header flex justify-start items-center">
                                        <div className="py-4">
                                            <Image alt="image" src={comment.author.node.avatar.url} width={comment.author.node.avatar.width} height={comment.author.node.avatar.height} className="rounded-full max-w-[50px] mr-4" />
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {comment.author.node.name}
                                            </div>
                                            <div className="text-sm">
                                                <Date dateString={comment.date} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-body pl-[66px]">
                                        <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </section>
            </div>
            <SiteFooter />
        </>
    );
}