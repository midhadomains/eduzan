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
                <div className="text-center text-[1.2rem] my-2 font-semibold p-2 tracking-wide">
                    404 Bad Request , Redirecting To Homepage  ...
                </div>
            </div>
        </div>
    );
};

export default RedirectPage;
