import { getPostList } from "../../lib/posts";
import { useState } from "react";

export default function LoadMore({ posts, setPosts, taxonomy = null }) {

    let bT = posts.pageInfo.hasNextPage ? 'Load more posts' : 'No more posts to load';
    let bD = posts.pageInfo.hasNextPage ? false : true;

    const [buttonText, setButtonText] = useState(bT);
    const [buttonDisabled, setButtonDisabled] = useState(bD);

    const handleOnclick = async (event) => {

        setButtonText('Loading...');
        setButtonDisabled(true);

        const morePosts = await getPostList(posts.pageInfo.endCursor, taxonomy);

        let updatedPosts = {
            pageInfo: {

            },
            nodes: []
        }

        updatedPosts.pageInfo = morePosts.pageInfo;

        posts.nodes.map((node) => {
            updatedPosts.nodes.push(node);
        });

        morePosts.nodes.map((node) => {
            updatedPosts.nodes.push(node);
        });

        setPosts(updatedPosts);

        if (morePosts.pageInfo.hasNextPage) {
            setButtonText('Load more posts');
            setButtonDisabled(false);
        }
        else {
            setButtonText('No more posts to load');
            setButtonDisabled(true);
        }
    }
    return (
        <button
            className=" transition-colors  duration-150  load-more font-[500] shadow-xl rounded-3xl bg-[#BF4E1E] text-white px-4 py-2 mt-[20px] md:mt-[50px] hover:bg-white hover:text-[#BF4E1E]"
            onClick={handleOnclick}
            disabled={buttonDisabled}>
            {buttonText}
        </button>
    );
}