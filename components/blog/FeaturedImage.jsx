import Image from "next/image";
import Link from "next/link";

export default function FeaturedImage({ post }) {
    let img = '';

    const defaultFeaturedImage = "https://www.midhafin.com/_next/image?url=https%3A%2F%2Fmidha-images.s3.ap-south-1.amazonaws.com%2FMidhafin%2FBlog%2FR-Squared.webp&w=828&q=75";
    const defaultWidth = "500";
    const defaultHeight = "400";
    if (post.featuredImage) {
        let sizes = post.featuredImage.node.mediaDetails.sizes;
        let maxSize = sizes.reduce((max, size) => {
            const width = parseInt(size.width, 10);
            if (width < 1000 && width > max.width) {
                return { ...size, width };
            }
            return max;
        }, { width: 0 });

        img = {
            src: maxSize.sourceUrl,
            width: maxSize.width,
            height: maxSize.height
        };
    } else {
        img = {
            src: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight
        };
    }
    return (
        <Link href={`/${post.slug}`}>
            <Image src={img.src} width={img.width} height={img.height} alt={post.title} quality={100} className="w-[100%] object-cover rounded-lg" />
        </Link>
    );
}
