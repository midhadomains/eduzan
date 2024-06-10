import { fetchGraphQLData } from '../../components/lib/graphqlRequest';
import Image from 'next/image';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import Footer from '../../components/common/SiteFooter';
import Navbar from '../../components/common/SiteHeader';
import TableOfContents from '../../components/blog/TableOfContents';
import parameterize from 'parameterize';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { fetchSlugs } from '../../components/lib/FetchSlugs';
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';

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

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Navbar />
      <TableOfContents TOC={toc} />
      <div className='p-5 max-w-[800px] mx-auto'>
        <p className='text-[18px] font-[500] uppercase text-[#BE4E1E] tracking-wider '>{blogData.category}</p>
        <h1 className='text-[40px] font-bold leading-[34.8px] my-[26px]'>{blogData.title}</h1>
        <p className='text-[18px] font-[400] text-[#2E3442]'>Author <span className='underline underline-offset-[3px] '>{blogData.author}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GoDotFill className='inline my-auto text-[12px]' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formatDateString(blogData.createdAt)}</p>
        <p className='text-[18px] font-[400] mt-2 mb-4 text-[#2E3442]'>Reviewed by <span className='underline  underline-offset-[3px] '> {blogData.reviewer}</span></p>
        <Image src={blogData.image} width={800} height={600} alt={blogData.title} className='my-3' />
        <div className='prose text-[14px] sm:text-[17px] lg:text-[20px]' dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      {/* <div className='px-[20px] md:px-[50px] max-w-[1400px] mx-auto'>
        <h2 className='text-[24px] font-bold mb-4'>Check out other blogs</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {allBlogs.map(blog => (
            <Link key={blog._id} href={`/blog/${blog.slug}`}>
              <a className='block'>
                <div className='flex flex-col items-center'>
                  <Image src={blog.image} width={400} height={300} alt={blog.title} className='mb-2' />
                  <h3 className='text-[20px] font-semibold'>{blog.title}</h3>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export const revalidate = 604800; // Revalidate every week in seconds
