import Reviews from "../../components/Reviews";

export const metadata = {
    title: "Student Reviews - MidhaFin | Hear from Our Successful Students",
    description: "Discover what our students are saying about their experiences with MidhaFin. Read reviews and testimonials from successful FRM candidates who have benefited from our expert guidance and comprehensive resources.",
    keywords: [
        "MidhaFin",
        "Student Reviews",
        "Testimonials",
        "FRM Exam Success",
        "Student Feedback",
        "Finance Education Reviews",
        "FRM Certification Reviews",
        "Course Reviews",
        "Student Experiences",
        "Success Stories"
    ]
};

export default function Page() {
    return (
        <>
            <div className="select-none">
                {/* <Reviews /> */}
                <Reviews />
            </div>
        </>
    );
}



