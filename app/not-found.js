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
        <div className='w-[100%] select-none'>
            <div>
                <Image className='mx-auto mt-[60px]' alt="check" width={300} height={300} src='/MidhaFin-logo.webp' priority />
                <h1 className="text-center text-lg lg:text-2xl my-1 font-semibold p-2 tracking-wide	">404 Page Not Found</h1>
                <div className="text-center text-[1.2rem] my-2 font-semibold p-2 tracking-wide">
                    Redirecting To Homepage in {timer} seconds ...
                </div>
                <hr className='w-[20%] mx-auto my-2' />
            </div>
        </div>
    );
};

export default RedirectPage;
