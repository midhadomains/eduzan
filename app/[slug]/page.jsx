import { fetchGraphQLData } from '../../components/lib/graphqlRequest';
import Image from 'next/image';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import TableOfContents from '../../components/blog/TableOfContents';
import parameterize from 'parameterize';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { fetchSlugs } from '../../components/lib/FetchSlugs';

const BLOG_QUERY = `
  query Node($slug: String!) {
    searchBlogBySlug(slug: $slug) {
      _id
      title
      author
      meta_description
      keywords
      category
      sub_category
      slug
      data
      image
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
      url: `https://wwww.midhafin.com/${slug}`,
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

  try {
    const result = await fetchGraphQLData(BLOG_QUERY, variables);
    blogData = result?.searchBlogBySlug;
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

  return (
    <>
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
      <TableOfContents TOC={toc} />
      <div className='p-5 max-w-[800px] mx-auto'>
        <Image src={blogData.image} width={800} height={600} alt={blogData.title} />
        <h1>{blogData.title}</h1>
        <p>{blogData.author}</p>
        <p>{blogData.meta_description}</p>
        <div className='prose' dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
}

export const revalidate = 604800; // Revalidate every week in seconds
