import React from 'react'
import Image from 'next/image'

export default function FeaturesSection() {
  const data = [
    {
      id: 1,
      img: "/ief.svg",
      title: "Industry Expert Faculty",
      description: "Well trained & have real industry experience, who have taught hundreds of students & have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in & are often complimented upon by our students."
    },
    {
      id: 2,
      img: "/sds.svg",
      title: "Systematic Doubt Solving",
      description: "We believe curiosity is the mother of all inventions, and so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Our faculty encourages students to ask doubts and for them no doubt is small or silly. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students."
    },
    {
      id: 3,
      img: "/etem.svg",
      title: "End to End Mentorship ",
      description: " We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students."
    }
  ]



  return (
    <div className=' absolute w-[100%] h-[600px] bg-gradient-to-r  from-[#00000000] to-[#00000000]   '>
      <div className='bg-featuresbg   flex justify-around w-[100%] h-[100%] pt-[200px] px-9'>
        <div >
          <div className='w-[300px] backdrop-blur-[5px] bg-gradient-to-t from-[#9a381d12] to-[#f9f2df2f]  mx-5 '>
            <Image src="/ief.svg" alt="img" width={120} height={100} className='fixed -top-[80px] left-[90px]' />
            <div className='w-[100%] p-3 text-center h-[140px] overflow-hidden hover:h-[365px] transition-height duration-500 ease-in-out  rounded-xl '>
              <h2 className='text-[1.5rem] font-bold tracking-wider my-7'>Industry Experienced Faculty</h2>
              <p className='text-[#3b1211]'>Well trained & have real industry experience, who have taught hundreds of students & have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in & are often complimented upon by our students.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='w-[300px] backdrop-blur-[5px] bg-gradient-to-t from-[#9a381d12] to-[#f9f2df2f]  mx-5 '>
            <Image src="/sds.svg" alt="img" width={100} height={100} className='fixed -top-[80px] left-[110px]' />
            <div className='w-[100%] p-3 text-center h-[140px] overflow-hidden hover:h-[365px] transition-height duration-500 ease-in-out  rounded-xl '>
              <h2 className='text-[1.5rem] font-bold tracking-wider my-7'>Systematic Doubt Solving</h2>
              <p className='text-[#6A1C1A]'>We believe curiosity is the mother of all inventions, so we ensure every single relevant doubt of every single student is cleared within reasonable time frame. Relevant doubts from other sources are also answered by our faculty and we provide in depth and easy to understand solutions to our students.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='w-[300px] backdrop-blur-[5px] bg-gradient-to-t from-[#9a381d12] to-[#f9f2df2f]  mx-5 '>
            <Image src="/etem.svg" alt="img" width={100} height={100} className='fixed -top-[80px] left-[95px]' />
            <div className='w-[100%] p-3 text-center h-[140px] overflow-hidden hover:h-[365px] transition-height duration-500 ease-in-out  rounded-xl '>
              <h2 className='text-[1.5rem] font-bold tracking-wider my-7 px-2'>End to End Mentorship</h2>
              <p className='text-[#6A1C1A]'> We help students throughout the process of learning and even beyond. From study planning, to the exam, to the relevant job interviews, we are there at every step with our students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // return (
  // bg-bgfrm
  // <div className='flex justify-center  h-[500px]'>
  //   <div className={styles.container} class='backdrop-blur'>
  //     <div className={styles.card}>
  //       <div className={`${styles.slide} ${styles.slide1}`}>
  //         <div className={styles.content}>
  //           <div className={styles.icon}>
  //             <i className="fa fa-user-circle" aria-hidden="true"></i> 
  //             <Image src="/ief.svg" alt="img" width={130} height={100} className='mx-auto' />
  //             <h2>Industry Expert Faculty</h2>
  //           </div>
  //         </div>
  //       </div>
  //       <div className={`${styles.slide} ${styles.slide2}`}>
  //         <div className={styles.content}>
  //           <p>Well trained & have real industry experience, who have taught hundreds of students & have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in & are often complimented upon by our students.</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   <div className={styles.container} class='backdrop-blur'>
  //     <div className={styles.card}>
  //       <div className={`${styles.slide} ${styles.slide1}`}>
  //         <div className={styles.content}>
  //           <div className={styles.icon}>
  //             <i className="fa fa-user-circle" aria-hidden="true"></i>
  //             <Image src="/sds.svg" alt="img" width={100} height={100} className='mx-auto' />
  //             <h2>Systematic Doubt Solving</h2>
  //           </div>
  //         </div>
  //       </div>
  //       <div className={`${styles.slide} ${styles.slide2}`}>
  //         <div className={styles.content}>
  //           <p>Well trained & have real industry experience, who have taught hundreds of students & have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in & are often complimented upon by our students.</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div className={styles.container} class='backdrop-blur'>
  //     <div className={styles.card}>
  //       <div className={`${styles.slide} ${styles.slide1}`}>
  //         <div className={styles.content}>
  //           <div className={styles.icon}>
  //             <i className="fa fa-user-circle" aria-hidden="true"></i>
  //             <Image src="/etem.svg" alt="img" width={100} height={100} className='mx-auto' />
  //             <h2>End to End Mentorship </h2>
  //           </div>
  //         </div>
  //       </div>
  //       <div className={`${styles.slide} ${styles.slide2}`}>
  //         <div className={styles.content}>
  //           <p>Well trained & have real industry experience, who have taught hundreds of students & have prepared thousands of questions over the years. Quality of our faculty is something that we take great pride in & are often complimented upon by our students.</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  // </div>
  // )
}
