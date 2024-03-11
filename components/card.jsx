import React from 'react';

function ReviewCarousel({ images, titles, videos, currentIndex }) {
    return (
        <div className="max-w-2xl mx-auto ">
            {/* <div id="default-carousel" className="relative" data-carousel="static">

                <div className="w-full  mx-auto rounded-3xl shadow-lg bg-white px-10 pt-16 pb-10 text-gray-600" style={{ maxWidth: '560px' }}>
                    <div className="overflow-hidden relative mb-10">
                        <div className="w-full overflow-hidden text-center select-none">
                            <div className="w-36 h-36 border rounded-full mx-auto mb-10 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
                            <h2 className="font-bold text-xl text-indigo-500 mb-3">{titles[currentIndex]}</h2>
                        </div>
                    </div>
                    <div className="w-full">
                        <iframe
                            title={titles[currentIndex]}
                            width="100%"
                            height="200"
                            src={videos[currentIndex]}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div> */}
            <div>
                <div className='h-[150px] bg-white'>
                    <div className="border rounded-full mx-auto mb-10 overflow-hidden bg-cover bg-center " style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
                    <h2 className="font-bold text-xl text-indigo-500 mb-3 text-center">{titles[currentIndex]}</h2>
                </div>
                <iframe
                    title={titles[currentIndex]}
                    width="100%"
                    height="200"
                    src={videos[currentIndex]}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default ReviewCarousel;
