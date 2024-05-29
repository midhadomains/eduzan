import Image from 'next/image'
export default function Reviewcard({ data }) {
    return (
        <div className="w-[320px] md:w-[350px] bg-[#F9F6F4] border-[] lg:-[400px]  mx-auto select-none">
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                    overflow: "hidden",
                    borderRadius: "10px",
                }}
            >
                <iframe
                    title="false"
                    showinfo="false"
                    src={data.videos}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                ></iframe>
            </div>
            <div className=' flex justify-between py-4'>
                <div className='my-auto py-2'>
                    <h2 className=" text-xl lg:text-2xl font-semibold  my-auto   tracking-wide">{data.titles}</h2>
                    <div className='flex justify-between w-[150px] mt-3'>
                        <Image src='/star-icon.svg' width={20} height={20} alt='img' />
                        <Image src='/star-icon.svg' width={20} height={20} alt='img' />
                        <Image src='/star-icon.svg' width={20} height={20} alt='img' />
                        <Image src='/star-icon.svg' width={20} height={20} alt='img' />
                        <Image src='/star-icon.svg' width={20} height={20} alt='img' />

                    </div>
                </div>
                <div className="border rounded-full w-[80px] h-[80px] bg-cover m shadow-xl" style={{ backgroundImage: `url(${data.images})` }}></div>
            </div>
        </div>
    )
}
