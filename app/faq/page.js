"use client"
import React, { useState } from 'react';
import Accordion from '../../components/Accordian';
import Navbar from '../../components/SiteHeader';
import Footer from '../../components/SiteFooter';


export default function Page() {
    return (
        <>
            <Navbar />
            <div className="h-40 bg-red-950">
                <h1 className="text-4xl font-style:normal font-bold text-white pt-6 pl-28">FAQs</h1>
                <p className="text-white pt-6 pl-28">
                    <a href="https://www.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f">Home</a> /
                    <a href="https://www.midhafin.com/faqs">
                        &nbsp; Frequently Asked Questions
                    </a>
                </p>
            </div>
            <div className="center-container">
                <h1 className="lg:text-4xl sm:text-3xl font-style:normal font-bold text-center lg:pt-6 sm:pt-4">
                    Frequently <span style={{ color: '#8B4513' }}>Asked </span> Questions
                </h1>
                <br />
                <p className="flex justify-center text-lg lg:pl-[30%] lg:pr-[30%] sm:pl-[5%] sm:pr-[5%] text-center sm:text-left">
                    We at MidhaFin, focus on striking a careful balance, between Knowledge and Relevance,
                    between theory and analytics & between pure concepts and practical application.
                </p>
                <Accordion />
            </div>
            <Footer />
        </>
    );
}









