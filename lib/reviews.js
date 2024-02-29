"use client"
import React from 'react'
import { useEffect, useState } from 'react';

function Reviews() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://midhareviewapi.vercel.app/reviews');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);
    
    return (
        <>
            <div>
                {data ? (
                    <ul>
                        {data.map((review, index) => (
                            <li key={index}>
                                <h1>{review.name}</h1> 
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );

}

export default Reviews;