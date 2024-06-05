"use client";
import { useEffect, useState, useCallback } from 'react';
import { fetchGraphQLData } from '../lib/graphqlRequest';
import BlogCard from './BlogCard';
import { IoIosSearch } from "react-icons/io";

const QUERY = `
  query Node($first: Int!, $after: String, $category: String) {
    blogs(first: $first, after: $after, category: $category) {
      edges {
        node {
          _id
          title
          slug
          category
          author
          meta_description
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const SEARCH_QUERY = `
  query Query($keyword: String!) {
    searchBlogs(keyword: $keyword) {
      _id
      title
      slug
      category
      meta_description
      author
    }
  }
`;
const HomePage = () => {
    const [data, setData] = useState([]);
    const [endCursor, setEndCursor] = useState(null);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [category, setCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    const fetchData = useCallback(async (afterCursor = null, category = null, searchTerm = '') => {
        setError(null); // Reset the error state before a new fetch
        setIsFetching(true); // Set fetching state to true

        try {
            let result;
            if (searchTerm) {
                const variables = { keyword: searchTerm };
                result = await fetchGraphQLData(SEARCH_QUERY, variables);
                setData(result.searchBlogs || []); // Ensure it's an array
                setHasNextPage(false); // No pagination for search results
            } else {
                const variables = { first: 9, after: afterCursor, category };
                result = await fetchGraphQLData(QUERY, variables);
                setData(prevData => {
                    const newEdges = (result.blogs.edges || []).filter(edge =>
                        !prevData.some(existingEdge => existingEdge._id === edge.node._id)
                    );
                    return [...prevData, ...newEdges.map(edge => edge.node)];
                });
                setEndCursor(result.blogs.pageInfo.endCursor);
                setHasNextPage(result.blogs.pageInfo.hasNextPage);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to load posts. Please try again.');
        } finally {
            setIsFetching(false); // Reset fetching state
        }
    }, []);

    useEffect(() => {
        if (debouncedSearchTerm !== null) {
            fetchData(null, category, debouncedSearchTerm); // Fetch data only on debounced term change
        }
    }, [debouncedSearchTerm, category, fetchData]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const timeout = setTimeout(() => {
            setDebouncedSearchTerm(value);
            setData([]); // Clear current data
        }, 600); // Adjust the debounce delay as needed

        setDebounceTimeout(timeout);
    };

    if (error) return <p>{error}</p>;

    return (
        <div className='my-5 max-w-[1400px] px-[20px]  md:px-[50px] mx-auto'>
            <div className='flex flex-wrap-reverse justify-center md:justify-between my-5 gap-[20px] mx-auto items-center'>
                <div>
                    <button onClick={() => { setData([]); setCategory('frm-part-1'); }} className='mr-4 p-2 bg-[#E8E6E2] text-[#BE4E1E] rounded-full text-[14px] md:text-[16px] px-3 md:px-6'>FRM Part-1</button>
                    <button onClick={() => { setData([]); setCategory('frm-part-2'); }} className='mr-4 p-2 bg-[#E8E6E2] text-[#BE4E1E] rounded-full text-[14px] md:text-[16px] px-3 md:px-6'>FRM Part-2</button>
                    <button onClick={() => { setData([]); setCategory(''); }} className='p-2 bg-[#E8E6E2] text-[#BE4E1E] rounded-full text-[14px] md:text-[16px] px-4 md:px-6'>All</button>
                </div>
                <div className='flex items-center pr-7'>
                    <input
                        type="text"
                        placeholder="Search.."
                        name="search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className='p-2 border rounded-full w-[300px] px-5 bg-[#F1F1F1] '
                    />
                    <IoIosSearch className='text-[35px] -ml-[60px] text-[#9CA3AF]' />
                </div>
            </div>
            <hr className='my-6 max-w-[1280px] mx-auto border-[1.5px]'/>
            <div className='flex flex-wrap gap-[20px] justify-around'>
                {data.map((blog) => (
                    <BlogCard key={blog._id} data={blog} />
                ))}
            </div>
            <div className='w-[100%] flex justify-center items-center h-fit my-9'>
                {hasNextPage ?
                    <button onClick={() => fetchData(endCursor, category)} disabled={isFetching} className=' p-2 bg-[#E8E6E2] text-[#BE4E1E] rounded-full px-6 mx-auto text-center text-[22px]' >
                        {isFetching ? 'Loading...' : 'Load More'}
                    </button> : <p className=' p-2 bg-[#E8E6E2] text-[#BE4E1E] rounded-full px-6 mx-auto text-center text-[22px]' >No Post Exists</p>
                }
            </div>

        </div>
    );
};

export default HomePage;
