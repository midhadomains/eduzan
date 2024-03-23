"use client"
import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CounterUpPage() {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='grid grid-cols-2 gap-[30px]'>
                <div className='text-center'>
                    <h1 className='text-[40px] font-bold text-[#BE4E1E]'>{counterOn && <CountUp start={0} end={76} duration={2} deley={0} />}%</h1>
                    <h3>NOV 2022</h3>
                    <p>Success rate for FRM Level-I</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[40px] font-bold text-[#BE4E1E]'>{counterOn && <CountUp start={0} end={78} duration={2} deley={0} />}%</h1>
                    <h3>NOV 2022</h3>
                    <p>Success rate for FRM Level-II</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[40px] font-bold text-[#BE4E1E]'>{counterOn && <CountUp start={0} end={86} duration={2} deley={0} />}%</h1>
                    <h3>MAY 2023</h3>
                    <p>Success rate for FRM Level-I</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[40px] font-bold text-[#BE4E1E]'>{counterOn && <CountUp start={0} end={88} duration={2} deley={0} />}%</h1>
                    <h3>NOV 2023</h3>
                    <p>Success rate for FRM Level-II</p>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default CounterUpPage;