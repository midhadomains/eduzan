"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const RedirectPage = () => {
    const router = useRouter();
    const [timer, setTimer] = useState(3);

    useEffect(() => {
        // Redirect to the home page after 3 seconds
        const redirectTimeout = setTimeout(() => {
            router.push('/');
        }, 100);

        // Clear the timer and timeout when the component is unmounted
        return () => {
            clearTimeout(redirectTimeout);
        };
    }, [router]);

    return (
        <div className='w-[100%]'>
            <div>
                <Image src='/404.jpg' width={600 } height={600} alt='404 Error' className='mx-auto w-[300px] md:w-[600px] '/>
                <div className="text-center text-[1.2rem] md:text-[1.8rem] my-2 font-semibold p-2 tracking-wide">
                    404 Page Not Found, Redirecting To Homepage  ...
                </div>
            </div>
        </div>
    );
};

export default RedirectPage;
