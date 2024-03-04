"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const RedirectPage = () => {
    const router = useRouter();
    const [timer, setTimer] = useState(3);

    useEffect(() => {
        const redirectTimer = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        // Redirect to the home page after 3 seconds
        const redirectTimeout = setTimeout(() => {
            router.push('/');
        }, 3000);

        // Clear the timer and timeout when the component is unmounted
        return () => {
            clearInterval(redirectTimer);
            clearTimeout(redirectTimeout);
        };
    }, [router]);

    return (
        <div className='w-[100%]'>
            <div>
                <div className="text-center text-[1.2rem] my-2 font-semibold p-2 tracking-wide">
                    Redirecting To Homepage in {timer} seconds ...
                </div>
                <Image className='mx-auto mt-[60px]' alt="check" width={300} height={300} src='/bigcheck.png' priority/>
                <h1 className="text-center text-[2rem] lg:text-[2.5rem] my-2 font-semibold p-2 tracking-wide">Thank you <span className='text-[#6A1C1A]'>!</span></h1>
                <hr className='w-[30%] mx-auto'/>
                <h1 className="text-center text-lg lg:text-2xl my-1 font-semibold p-2 tracking-wide	">Your Query was successfully submitted. </h1>
                <h1 className="text-center text-lg lg:text-xl mb-1 p-2 tracking-wide	">We will get in touch with you shortly</h1>
                <Image className='mx-auto mt-[30px]' alt="check" width={200} height={300} src='/MidhaFin-logo.webp' />
                <hr className='w-[20%] mx-auto my-2'/>
            </div>
        </div>
    );
};

export default RedirectPage;
