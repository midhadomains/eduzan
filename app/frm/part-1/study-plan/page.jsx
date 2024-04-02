import React from 'react'
import Navbar from '../../../../components/SiteHeader'
import Footer from '../../../../components/SiteFooter'
export default function page() {
    return (
        <div className=''>
            <Navbar />
            <div className='bg-[#6A1C1A] p-7 '>
                <h1 className='text-[40px] text-white text-center'>FRM Part 1 - <span className='font-semibold'>STUDY PLAN 2024</span></h1>
            </div>
            <div className='max-w-[1300px] mx-auto text-left my-[50px] p-4 sm:p-5'>
                <h1 className='text-[#6A1C1A] text-2xl mb-3'>Overview</h1>
                <p className='text-[16px] '>The study plan has been structured after very careful analysis & the topics have been sequenced in such a way so as to systematically link one topic after the other.</p>
                <h2 className='text-[#BF4E1E] text-xl mt-9 mb-2'>According to the Instructor – </h2>
                <p className='font-[500] text-[16px]'>“It’s not a wise strategy to prepare for the exam on a module by module basis. There are some concepts which are used in an earlier topic but discussed in detail in a later topic in another module. For example – Beta is introduced in CAPM in the Foundations of Risk Management Module, but the quantitative aspect of beta is discussed in Linear Regression in the Quantitative Methods Module. Hence, the sequence of topics to prepare for the exams becomes very important.”</p>
                <p className='my-4 text-[16px]'>The study plan has taken care of the sequence in the best possible way. Also, unrelated theory portions have been scattered in the timeline so as to get a good blend of theoretical and numerical based topics.We strongly advice to follow this sequence and the schedule.</p>
                <div className='flex justify-flex-start flex-wrap '>
                    <h2 className='text-2xl text-[#6A1C1A]'>KEY used to represent the four modules :</h2>
                    <div className='mx-5 my-3'>
                        <p className='text-[#6A1C1A] text-xl sm:text-2xl'>FRM -<span className='text-black font-[400] sm:text-xl'> Foundations of Risk Management</span></p>
                        <p className='text-[#6A1C1A] text-xl sm:text-2xl'>QTA -<span className='text-black font-[400] sm:text-xl'> Quantitative Analysis</span></p>
                        <p className='text-[#6A1C1A] text-xl sm:text-2xl'>FMP -<span className='text-black font-[400] sm:text-xl'> Financial Markets and Products</span></p>
                        <p className='text-[#6A1C1A] text-xl sm:text-2xl'>VRM -<span className='text-black font-[400] sm:text-xl'> Valuations and Risk Models</span></p>
                    </div>
                </div>
                <h1 className='text-[#6A1C1A] text-2xl mt-8'>Schedule</h1>
                <div className='max-w-[1100px] mx-auto p-1 sm:p-5'>
                    <div className='bg-[#FDF9ED] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 1
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Fundamentals of Probability [QTA-1]</li>
                            <li>Random Variables [QTA-2]</li>
                            <li>Common Univariate Random Variables [QTA-3]</li>
                        </ul>
                    </div>
                    <div className='bg-[#FDF9ED] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 2
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Multivariate Random Variables [QTA-4]</li>
                            <li>Sample Moments [QTA-5]</li>
                            <li>Hypothesis Testing [QTA-6]</li>
                        </ul>
                    </div>
                    <div className='bg-[#FDF9ED] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 3
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Linear Regression [QTA-7]</li>
                            <li>Regression with Multiple Explanatory Variables [QTA-8]</li>
                            <li>Regression Diagnostics [QTA-9]</li>
                        </ul>
                    </div>
                    <div className='bg-[#FDF9ED] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 4
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Modern Portfolio Theory (MPT) and the Capital Asset Pricing Model (CAPM) [FRM-5]</li>
                            <li>The Arbitrage Pricing Theory and Multifactor Models of Risk and Return [FRM-6]</li>
                            <li>Machine Learning Methods [QTA-14]</li>
                            <li>Machine Learning and Prediction [QTA-15]</li>
                        </ul>
                    </div>
                    <div className='bg-[#EFF5F1] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 5
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Stationary Time Series [QTA-10]</li>
                            <li>Non-stationary Time Series [QTA-11]</li>
                            <li>Insurance Companies and Pension Plans [FMP-2]</li>
                        </ul>
                    </div>
                    <div className='bg-[#EFF5F1] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 6
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Introduction to Derivatives [FMP-4]</li>
                            <li>Exchanges and OTC Markets [FMP-5]</li>
                            <li>Central Clearing [FMP-6]</li>
                            <li>Properties of Interest Rates (Part 1) [FMP-16]</li>
                            <li>Futures Markets [FMP-7]</li>
                        </ul>
                    </div>
                    <div className='bg-[#EFF5F1] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 7
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Using Futures for Hedging [FMP-8]</li>
                            <li>Pricing Financial Forwards and Futures [FMP-10]</li>
                            <li>Commodity Forwards and Futures [FMP-11]</li>
                            <li>Foreign Exchange Markets [FMP-9]</li>
                        </ul>
                    </div>
                    <div className='bg-[#EFF5F1] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 8
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Properties of Interest Rates (Part 2) [FMP-16]</li>
                            <li>Pricing Conventions, Discounting and Arbitrage [VRM-9]</li>
                            <li>Interest Rates[VRM-10]</li>
                            <li>Bond Yields and Return Calculations [VRM-11]</li>
                            <li>Corporate bonds [FMP-17]</li>
                        </ul>
                    </div>
                    <div className='bg-[#EAF0F5] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 9
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Applying Duration, Convexity and DV 01 [VRM-12]</li>
                            <li>Modelling Non-Parallel Term Structure Shifts and Hedging [VRM-13]</li>
                            <li>Mortgages and Mortgage-Backed Securities [FMP-18]</li>
                            <li>Anatomy of Great Financial Crisis [FRM-10]</li>
                        </ul>
                    </div>
                    <div className='bg-[#EAF0F5] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 10
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Options Markets [FMP-12]</li>
                            <li>Properties of Options [FMP-13]</li>
                            <li>Trading Strategies [FMP-14]</li>
                            <li>Exotic Options [FMP-15]</li>
                            <li>Banks [FMP-1]</li>
                        </ul>
                    </div>
                    <div className='bg-[#EAF0F5] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 11
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Binomial Trees [VRM-14]</li>
                            <li>The Black-Scholes-Merton Model [VRM-15]</li>
                            <li>Option Sensitivity Measures: The “Greeks” [VRM-16]</li>
                            <li>Simulation and Bootstrapping [QTA-13]</li>
                        </ul>
                    </div>
                    <div className='bg-[#EAF0F5] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 12
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Measuring Returns, Volatility and Correlation [QTA-12]</li>
                            <li>Measures of Financial Risk [VRM-1]</li>
                            <li>Calculating and Applying VaR [VRM-2]</li>
                            <li>Measuring and Monitoring Volatility [VRM-3]</li>
                        </ul>
                    </div>
                    <div className='bg-[#FDF2EB] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 13
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>External and Internal Credit Ratings [VRM-4]</li>
                            <li>Country Risk: Determinants, Measures, and Implications [VRM-5]</li>
                            <li>Operational Risk [VRM-7]</li>
                            <li>Stress Testing [VRM-8]</li>
                        </ul>
                    </div>
                    <div className='bg-[#FDF2EB] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 14
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Interest Rate Futures [FMP-19]</li>
                            <li>Swaps [FMP-20]</li>
                            <li>Credit Risk TransferMechanisms [FRM-4]</li>
                            <li>Measuring Credit Risk [VRM-6]</li>
                        </ul>
                    </div>
                    <div className='bg-[#FDF2EB] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 15
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>The Building Blocks of Risk Management [FRM-1]</li>
                            <li>How Do Firms Manage Financial Risk? [FRM-2]</li>
                            <li>The Governance of Risk Management [FRM-3]</li>
                            <li>Risk Data Aggregation and Reporting Principles [FRM-7]</li>
                        </ul>
                    </div>
                    <div className='bg-[#FDF2EB] text-left relative my-[3rem]'>
                        <h1 className='bg-[#6A1C1A] w-[180px] py-2 text-center rounded-full text-white text-2xl font-[500] absolute -top-6 left-9'>
                            WEEK 16
                        </h1>
                        <ul className='list-disc list-inside px-2 py-6 sm:p-9 leading-8	'>
                            <li>Learning from Financial Disasters [FRM 9]</li>
                            <li>GARP Code of Conduct [FRM-11]</li>
                            <li>Enterprise Risk Management and Future Trends [FRM-8]</li>
                            <li>Fund Management [FMP-3]</li>
                        </ul>
                    </div>
                </div>
                <h1 className='text-center text-3xl font-semibold  my-5 text-[#6A1C1A]'>Video Explanation</h1>
                <iframe style={{ aspectRatio: "16/9", width: "100%", maxWidth: "1000px", margin: "0 auto" }} src="https://www.youtube.com/embed/6sTEUkR40uI?si=74k44yBnyTMT9zvZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <Footer />
        </div>
    )
}
