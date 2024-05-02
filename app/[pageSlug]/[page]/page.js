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
                <Image src='/404.jpg' width={600} height={600} alt='404 Error' className='mx-auto w-[300px] md:w-[600px] ' priority={true} />
                <div className="text-center text-[1.2rem] my-2 font-semibold p-2 tracking-wide">
                    404 Page Not Found , Redirecting To Homepage in {timer} seconds ...
                </div>
            </div>
        </div>
    );
};

export default RedirectPage;
