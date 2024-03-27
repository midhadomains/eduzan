import React from 'react';
import Image from 'next/image'

function ReviewCarousel({ images, titles, videos, currentIndex }) {
    return (
        <div className="mx-3 max-w-2xl sm:mx-4 lg:mx-8   transition-transform	duration-300 ">
            <div>
                <iframe
                    title="false"
                    showinfo="false"
                    width="350px"
                    height="190px"
                    src={videos[currentIndex]}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className=' bg-white flex justify-between py-4'>
                    <div className='my-auto py-2'>
                        <h2 className=" text-xl lg:text-2xl font-semibold  my-auto   tracking-wide">{titles[currentIndex]}</h2>
                        <div className='flex justify-between w-[150px] mt-3'>
                            <Image src='/star-icon.svg' width={20} height={20} alt='img'/>
                            <Image src='/star-icon.svg' width={20} height={20} alt='img'/>
                            <Image src='/star-icon.svg' width={20} height={20} alt='img'/>
                            <Image src='/star-icon.svg' width={20} height={20} alt='img'/>
                            <Image src='/star-icon.svg' width={20} height={20} alt='img'/>

                        </div>
                    </div>
                    <div className="border rounded-full w-[80px] h-[80px] bg-cover m shadow-xl" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
                </div>
            </div>
        </div>
    );
}

export default ReviewCarousel;
