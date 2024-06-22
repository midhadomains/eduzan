
const fetchReviews = async () => {
    try {
        const response = await fetch('https://utbrbosujyy4c3bmthififoqm40gvnqy.lambda-url.ap-south-1.on.aws/reviews');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

export default fetchReviews;
