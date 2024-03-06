"use client"
import Image from "next/image"
export default function CarouselHome() {
    return (
        <div className='w-3/4 mx-auto '>
            <div className='mt-20 flex flex-nowrap border overflow-scroll py-3'>
                <div className='bg-white rounded-xl mx-9'>
                    <div className='rounded-xl '>
                        <Image src='/bigcheck.png' width={50} height={50} alt='image' />
                    </div>
                    <div>
                        <h1>Sujal</h1>
                        <iframe width="300" height="201" src="https://www.youtube.com/embed/AV-wHboWyHM?si=6wWqhy3qGbZEIyP6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    </div>
                </div>
                <div className='bg-white rounded-xl mx-9'>
                    <div className='rounded-xl mx-auto'>
                        <Image src='/bigcheck.png' width={50} height={50} alt='image' />
                    </div>
                    <div>
                        <h1>Sujal</h1>
                        <iframe width="300" height="201" src="https://www.youtube.com/embed/AV-wHboWyHM?si=6wWqhy3qGbZEIyP6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen={true}></iframe>
                    </div>
                </div>
                <div className='bg-white rounded-xl mx-9'>
                    <div className='rounded-xl mx-auto'>
                        <Image src='/bigcheck.png' width={50} height={50} alt='image' />
                    </div>
                    <div>
                        <h1>Sujal</h1>
                        <iframe width="300" height="201" src="https://www.youtube.com/embed/AV-wHboWyHM?si=6wWqhy3qGbZEIyP6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen={true}></iframe>
                    </div>
                </div>
                <div className='bg-white rounded-xl mx-9'>
                    <div className='rounded-xl mx-auto'>
                        <Image src='/bigcheck.png' width={50} height={50} alt='image' />
                    </div>
                    <div>
                        <h1>Sujal</h1>
                        <iframe width="300" height="201" src="https://www.youtube.com/embed/AV-wHboWyHM?si=6wWqhy3qGbZEIyP6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
