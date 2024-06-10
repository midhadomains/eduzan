"use client"
import { useEffect, useState } from 'react';
import { fetchGraphQLData } from '../../components/lib/graphqlRequest';
import Link from 'next/link';

const OTHER_BLOGS_QUERY = `
  query {
    blogs(first: 4) {
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

export default function OtherBlogs({ currentBlogId }) {
    const [otherBlogs, setOtherBlogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetchGraphQLData(OTHER_BLOGS_QUERY);
                const blogs = result.blogs.edges.map(edge => edge.node).filter(blog => blog._id !== currentBlogId);
                setOtherBlogs(blogs.slice(0, 3));
            } catch (error) {
                console.error('Error fetching other blogs:', error);
            }
        }

        fetchData();
    }, [currentBlogId]);

    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold mb-4'>Check Out Other Blogs</h2>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {otherBlogs.map(blog => (
                    <Link href={`/${blog.slug}`} key={blog._id}>
                        <a className='block p-4 border rounded shadow hover:shadow-lg transition'>
                            <img src={blog.image} alt={blog.title} className='mb-2 w-full h-48 object-cover rounded' />
                            <h3 className='text-xl font-semibold'>{blog.title}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}
