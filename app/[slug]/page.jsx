import { fetchGraphQLData } from '../../components/lib/graphqlRequest';
import Image from 'next/image';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import Navbar from '../../components/common/SiteHeader';
import parameterize from 'parameterize';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { fetchSlugs } from '../../components/lib/FetchSlugs';
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';
import Footer from '../../components/common/SiteFooter';
import { FaLinkedin } from "react-icons/fa";
import dynamic from 'next/dynamic';
import { MdOutlinePendingActions } from "react-icons/md";


const ShareButton = dynamic(() => import('../../components/blog/ShareButton'), {
  ssr: false,
});
const TableOfContents = dynamic(() => import('../../components/blog/TableOfContents'), {
  ssr: false,
});

const BLOG_QUERY = `
  query Node($slug: String!) {
    searchBlogBySlug(slug: $slug) {
      _id
      title
      author
      meta_description
      reviewer
      keywords
      category
      sub_category
      slug
      data
      createdAt
      image
    }
  }
`;

const ALL_BLOGS_QUERY = `
  query {
    blogs(first: 5) {
      edges {
        node {
          _id
          title
          slug
          image
        }
      }
    }
  }
`;

export async function generateStaticParams() {
  try {
    const slugs = await fetchSlugs();
    return slugs.map(slug => ({ slug }));
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const variables = { slug };
  const result = await fetchGraphQLData(BLOG_QUERY, variables);
  const blogData = result?.searchBlogBySlug;

  if (!blogData) {
    return {
      title: 'Page Not Found',
    };
  }
  return {
    title: blogData.title,
    description: blogData.meta_description,
    keywords: blogData.keywords,
    openGraph: {
      title: blogData.title,
      description: blogData.meta_description,
      url: `https://www.midhafin.com/${slug}`,
      images: [
        {
          url: blogData.image,
          width: 800,
          height: 600,
          alt: blogData.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const variables = { slug };
  let blogData;
  let allBlogs;

  try {
    const result = await fetchGraphQLData(BLOG_QUERY, variables);
    blogData = result?.searchBlogBySlug;

    const allBlogsResult = await fetchGraphQLData(ALL_BLOGS_QUERY);
    allBlogs = allBlogsResult.blogs.edges.map(edge => edge.node).filter(blog => blog.slug !== slug).slice(0, 3);
  } catch (err) {
    console.error('Error fetching blog data:', err);
    notFound();
    return null;
  }

  if (!blogData) {
    notFound();
    return null;
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blogData.title,
    image: [blogData.image],
    author: {
      '@type': 'Person',
      name: blogData.author,
    },
    description: blogData.meta_description,
  };

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
    .processSync(blogData.data)
    .toString();

  function formatDateString(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  }

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
    }
  };

  function AuthorTooltip({ authorName }) {
    const authorInfo = authorDetails[authorName] || {
      qualification: "Not Available",
      linkedin: "#",
      description: "No description available."
    };
    return (
      <div className="relative group-hover:flex z-20 ">
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
  const baseUrl = 'https://www.midhafin.com';
  return (
    <div className='bg-slate-100'>
      <Head>
        <title>{blogData.title}</title>
        <meta name="description" content={blogData.meta_description} />
        <meta name="keywords" content={blogData.keywords.join(', ')} />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.meta_description} />
        <meta property="og:url" content={`https://midhafin.com/${slug}`} />
        <meta property="og:image" content={blogData.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={blogData.title} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Navbar />
      <TableOfContents TOC={toc} />
      <div className='p-5 max-w-[800px] mx-auto '>
        <p className='text-[14px] sm:text-[16px] lg:text-[18px] font-[500] uppercase text-[#BE4E1E] tracking-wider '>{blogData.category}</p>
        <div className='flex justify-between items-center'>
          <h1 className='text-[25px]  md:text[33px] lg:text-[40px] font-bold leading-[34.8px] mt-[15px] md:mt-[26px] mb-1 md:mb-[10px] text-[#1e222b]'>{blogData.title}</h1>
          <ShareButton baseUrl={baseUrl} />
        </div>
        <hr className='w-[50px] sm:w-[75px] lg:w-[100px] border-[2px]  sm:border-[3px] rounded-full  mb-[24px] border-[#BE4E1E]' />
        <div className='text-[14px] md:text-[18px] font-[400] text-[#2E3442] flex flex-wrap  '>
          <div className='relative group'>
            Author -&nbsp;
            <span className='underline underline-offset-[3px] cursor-pointer min-w-[150px] flex-shrink-0 mr-5'>{blogData.author}</span>
            <AuthorTooltip authorName={blogData.author} />
          </div>
          <GoDotFill className='my-auto text-[12px] mr-5' />
          <span className='min-w-[200px] '>Published On {formatDateString(blogData.createdAt)}</span>
        </div>
        <div className='text-[14px]  md:text-[18px] font-[400] text-[#2E3442] sm:mt-2'>
          {blogData.reviewer == "Pending" ? 
          <p className='flex items-center'> Review Pending <MdOutlinePendingActions  className='ml-2'/></p> :
            <div className='flex'>
              Reviewed by &nbsp;
              <div className='relative group'>
                <span className='underline underline-offset-[3px] cursor-pointer'>{blogData.reviewer}</span>
                <AuthorTooltip authorName={blogData.reviewer} />
              </div>
            </div>
          }
        </div>
        <Image src={blogData.image} width={800} height={600} alt={blogData.title} className='my-3' />
        <div className='prose text-[14px] sm:text-[17px] lg:text-[20px]' dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <Footer />
    </div>
  );
}

export const revalidate = 3600; // Revalidate every week in seconds
