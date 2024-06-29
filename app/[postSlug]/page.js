import { getPostSlugs, getSinglePost } from "../../lib/posts";
import { getComments } from "../../lib/comments";
import { Inter } from "next/font/google";
import { getSeo } from "../../lib/seo";
import Image from "next/image";
import parameterize from 'parameterize';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import dynamic from "next/dynamic";
import Navbar from "../../components/common/SiteHeader";
import Footer from "../../components/common/SiteFooter";
import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import Link from "next/link";
import CommentForm from "../../components/blog/CommentForm";
import Date from "../../components/blog/Date";
import { notFound } from 'next/navigation';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import RightBanners from "../../components/blog/RightBanners";

const TableOfContents = dynamic(() => import('../../components/blog/TableOfContents'), {
    ssr: false,
});
const ShareButton = dynamic(() => import('../../components/blog/ShareButton'), {
    ssr: false,
});


var tagNames = null
const authorDetails = {
    "Micky Midha": {
        qualification: "BE, FRM®, CFA, LLB",
        linkedin: "https://www.linkedin.com/in/midhamicky/",
        description: "Micky Midha is a trainer in finance, mathematics, and computer science, with extensive teaching experience.",
        image: "/blog/mickymidha.png"
    },
    "Rahul Kapoor": {
        qualification: "MBA, FRM®, AI/ML ",
        linkedin: "https://www.linkedin.com/in/rahul-kapoor-59577a131/",
        description: "Rahul Kapoor is a content writer, certified in Risk Management from IIM Bangalore, with over a decade of experience.",
        image: "/blog/rahulkapoor.png"
    },
    "Rajesh Yadav": {
        qualification: "MCA",
        linkedin: "https://www.linkedin.com/in/rajesh-kumar-yadav-70978a207/",
        description: "Rajesh Yadav is a content writer,Web Developer and Digital Marketer.",
        image: "/blog/rajesh-yadav.png"
    },
    "Malobika Mukherjee": {
        qualification: "Bachelor in Design",
        linkedin: "https://www.linkedin.com/in/malobika-mukherjee-b041ba1b6/",
        description: "Malobika Mukhergee is a content writer, Graphic Designer and UI/UX designer.",
        image: "/blog/malobika-mukherjee.png"
    }
};

function AuthorTooltip({ authorName }) {
    const authorInfo = authorDetails[authorName] || {
        qualification: "Not Available",
        linkedin: "#",
        description: "No description available."
    };
    return (
        <div className="relative group-hover:flex z-20 shadow-2xl ">
            <div className="absolute left-[20px]  top-2 rounded-xl p-2 md:p-4 bg-white  border-gray-300 shadow-xl w-[200px] sm:w-[250px] md:w-[350px] hidden group-hover:block z-20 before:content-[''] before:absolute before:top-[-10px] after:shadow-2xl before:left-[50%] before:transform before:translate-x-[-50%] before:border-[12px]  before:border-transparent before:border-b-gray-300 before:border-t-0 before:border-l-0 before:border-r-0">
                <div className="absolute -top-[24px] left-[70px] transform -translate-x-1/2 w-0 h-0 border-[12px] border-transparent border-b-white"></div>
                <div className=' pt-2'>
                    <div className='flex items-center justify-center'>
                        <Image src={authorInfo.image} width={120} height={120} alt={authorName} className='rounded-full my-auto flex-shrink-0  shadow-xl ml-9  w-[70px] sm:w-[100px] md:w-[120px] max-w-[120px] ' priority={true} />
                        <Link href={authorInfo.linkedin} target="_blank" className='text-[20px] sm:text-[25px] lg:text-[30px] text-[#0A66C2] '><FaLinkedin className='my-auto -mb-[6px] ml-4' /></Link>
                    </div>
                    <p className='text-[14px] mt-2 text-center md:text-[18px] lg:text-[20px] font-semibold tracking-wide  leading-[15px] sm:leading-6'> {authorName}  </p>
                    <p className='text-[12px] text-center md:text-[14px] lg:text-[16px] font-[500] my-1 sm:my-[6px]'> {authorInfo.qualification}</p>
                    <p className='text-center  font-[400] text-[12px] md:text-[14px] lg:text-[17px]'>{authorInfo.description}</p>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    try {
        const postSlugs = await getPostSlugs();
        return postSlugs.map((s) => ({ postSlug: s.slug }));
    } catch (error) {
        console.error('Error fetching slugs:', error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    try {
        const seoData = await getSeo('post', params.postSlug);
        console.log(seoData)
        return {
            title: seoData.title,
            description: seoData.metaDesc,
            keywords: tagNames,
            openGraph: {
                title: seoData.opengraphTitle,
                description: seoData.metaDesc,
                images: [seoData.opengraphImage.mediaItemUrl],
                url: `https://midhafin.com/${params.postSlug}`,
                locale: 'en_IN',
                type: seoData.opengraphType,
                siteName: "MidhaFin",
            },
            twitter: {
                card: "summary_large_image",
                title: seoData.opengraphTitle,
                creator: '@midhafin',
                description: seoData.metaDesc,
                siteId: 'd24x59642cdhrl',
                images: [seoData.opengraphImage.mediaItemUrl],
            },

        };
    } catch (error) {
        notFound()
        console.error('Error fetching SEO data:', error);
        return { title: 'Page Not Found' };
    }
}

export default async function Post({ params }) {
    let postData, comments, commentCount, seoData, featuredImageUrl = "https://www.midhafin.com/_next/image?url=https%3A%2F%2Fmidha-images.s3.ap-south-1.amazonaws.com%2FMidhafin%2FBlog%2FR-Squared.webp&w=1920&q=75";

    try {
        postData = await getSinglePost(params.postSlug);
        ({ comments, commentCount } = await getComments(params.postSlug));
        seoData = await getSeo('post', params.postSlug);
        tagNames = postData.tags?.nodes?.map(tag => tag.name) || [];
        if (postData?.featuredImage) {
            const sizes = postData.featuredImage.node.mediaDetails.sizes;
            const maxSize = sizes.reduce((max, size) => {
                const width = parseInt(size.width, 10);
                if (width <= 2200 && width > max.width) {
                    return { ...size, width };
                }
                return max;
            }, { width: 0 });
            featuredImageUrl = maxSize.sourceUrl;
            // console.log(featuredImageUrl);
        }
    } catch (error) {
        console.error('Error fetching post data:', error);
        return null;
    }
    const toc = [];
    const content = unified()
        .use(rehypeParse, { fragment: true })
        .use(() => {
            return tree => {
                visit(tree, 'element', node => {
                    if (node.tagName === 'h2' && node.children && node.children[0] && node.children[0].value) {
                        const id = parameterize(node.children[0].value);
                        node.properties = node.properties || {};
                        node.properties.id = id;
                        toc.push({
                            id,
                            title: node.children[0].value,
                        });
                    }
                });
            };
        })
        .use(rehypeStringify)
        .processSync(postData.content)
        .toString();

    let jsonSchema;
    try {
        jsonSchema = seoData.schema.raw.replace(/https:\/\/cms.midhafin.com\/\d{4}\/\d{2}\/\d{2}\/([^/#]+)(#[^/]*)?/g, 'https://www.midhafin.com/$1');

    } catch (error) {
        console.error('Error processing SEO schema:', error);
        jsonSchema = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": "https://midhafin.com",
            "name": "MidhaFin",
            "description": "Fallback description for MidhaFin.",
            "publisher": {
                "@type": "Organization",
                "name": "MidhaFin",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://midhafin.com/logo.png",
                    "width": 120,
                    "height": 20
                }
            }
        });
    }
    // console.log(postData)
    const baseUrl = 'https://midhafin.com';

    return (
        <div className="bg-[#e7e8e962]">
            <Navbar />
            <div className=" xl:flex  justify-between  max-w-[1400px] mx-auto">
                <TableOfContents TOC={toc} />
                <div >
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonSchema }}></script>
                    <article className={`font-light`}>
                        <section>
                            <div className='p-5 max-w-[800px] mx-auto '>

                                <h2 className='text-[14px] sm:text-[16px] lg:text-[18px] font-[500] uppercase flex items-center text-[#BE4E1E] tracking-wider '>
                                    {
                                        postData.categories.nodes.map((data, key) => (
                                            <Link key={key} href={`/category/${data.slug}`}>
                                                <p className=''>
                                                    <span className="underline underline-offset-[3px]">{data.name}</span>
                                                    {key < postData.categories.nodes.length - 1 && <span>&nbsp;&nbsp;&#10095;&nbsp;&nbsp;</span>}
                                                </p>
                                            </Link>
                                        ))
                                    }
                                </h2>
                                <div className='flex justify-between items-center gap-5'>
                                    <h1 className='text-[25px]  md:text[33px] lg:text-[40px] font-bold leading-[30px] md:leading-[40px] lg:leading-[50px] mt-2 md:mt-4 mb-1 md:mb-[10px] text-[#1e222b] '>{postData.title}</h1>
                                    <ShareButton baseUrl={baseUrl} />
                                </div>
                                <hr className='w-[50px] sm:w-[75px] lg:w-[100px] border-[2px]  sm:border-[3px] rounded-full  mb-[24px] border-[#BE4E1E]' />
                                <div className='text-[14px] md:text-[18px] font-[400] text-[#2E3442] flex flex-wrap  '>
                                    <div className='relative group'>
                                        By &nbsp;
                                        <span className='underline underline-offset-[3px] cursor-pointer min-w-[150px] flex-shrink-0 mr-5'>{postData.author.node.name}</span>
                                        <AuthorTooltip authorName={postData.author.node.name} />
                                    </div>
                                    <GoDotFill className='my-auto text-[12px] mr-5' />
                                    <span className='min-w-[200px] '>Updated On <Date dateString={postData.modified} /></span>
                                </div>
                                <div className='text-[14px]  md:text-[18px] font-[400] text-[#2E3442] sm:mt-2'>
                                    {/* {postData.reviewer == "Pending" ?
                                <p className='flex items-center'> Review Pending <MdOutlinePendingActions className='ml-2' /></p> :
                                <div className='flex'>
                                    Reviewed by &nbsp;
                                    <div className='relative group'>
                                        <span className='underline underline-offset-[3px] cursor-pointer'>{postData.reviewer}</span>
                                        <AuthorTooltip authorName={postData.reviewer} />
                                    </div>
                                </div>
                            } */}
                                    {/* <p className='flex items-center'> Review Pending <MdOutlinePendingActions className='ml-2' /></p> */}

                                </div>
                                <Image src={featuredImageUrl} width={800} height={600} alt={postData.title} className='my-3' />
                                <div className='prose text-[14px] sm:text-[17px] lg:text-[20px]' dangerouslySetInnerHTML={{ __html: content }}></div>
                            </div>
                        </section>
                    </article>
                    <div className="container mx-auto lg:max-w-4xl px-[20px] md:px-[50px]">
                        <h3 className="text-xl py-2 my-4 border-l-4 border-l-[#BF4E1E] pl-4">{commentCount ? commentCount : 'No'} comments on this post so far :</h3>
                        <CommentForm postId={postData.databaseId} />
                    </div>

                    <div className="container mx-auto lg:max-w-4xl px-[20px] md:px-[50px] ">
                        <section>
                            <ul>
                                {comments.nodes.map((comment) => (
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
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
                <div >
                    <RightBanners />
                </div>
            </div>
            <Footer />
        </div>

    );
}

export const revalidate = 600; // Revalidate every 10 mins
