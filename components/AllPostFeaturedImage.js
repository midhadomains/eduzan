import Image from "next/image";
import Link from "next/link";

export default function AllPostFeaturedImage({ post }) {
    let img = '';

    const defaultFeaturedImage = "https://wp.abhinavr.com/wp-content/uploads/2022/12/travel_icy-polar_022K.jpg";
    const defaultWidth = "500";
    const defaultHeight = "281";

    if(post.featuredImage) {
        let size = post.featuredImage.node.mediaDetails.sizes[0];
        img = {
            src: size.sourceUrl,
            width: size.height,
            height: size.width,
        }
    }
    else {
        img = {
            src: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight
        }
    }

    return (
        <Link href={`/blog/${post.slug}`}>
            <Image src={img.src} width={500} height={281} alt={post.title} className=""/>
        </Link>
    )
}