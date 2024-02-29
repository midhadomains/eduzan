import Carousel from "../../components/Carousel";
import CourseCard from "../../components/CourseCard"
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../../components/CourseCard'), { ssr: false });

export default function Page() {
    const reviews=[
        {
            name:"Karan Vansani",
            image:"https://d502jbuhuh9wk.cloudfront.net/orgData/62826abf0cf2991cddb22ac6/pages/assets/images/Subhadev%20Pal.png",
            
        }
    ]
    
    return (
        // <p><DynamicComponent/></p>
        <Carousel/>

    )
}