import React from 'react'
import Image from "next/image"
import styles from './Coursecard.module.css'
import { FaRegClock ,FaLinkedin} from "react-icons/fa6";
import { TbListDetails ,TbDevices } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";
import { LuBookOpenCheck,LuPencilLine } from "react-icons/lu";
import Link from 'next/link'


export default function CourseCard({a},{index}) {
  const checkOther=(a)=>{
    if(a==="free"){
      return("Free")
    }
    else if(a==="custom"){
      return("Get Quotation")
    }
    else{
      return(<p className="line-through text-[17px] text-[#842021] my-auto mx-0">{a}</p>);
    }
  }
  return (
    <div id={styles.body} key={index} >
      <div id={styles.card}>
        <div id={styles.card__thumb}>
          <a href="#"><Image id={styles.img} width={400} height={400} src={a.image} alt="image" /></a>
        </div>
        {/* <date id={styles.card__date}>
          <span id={styles.card__date__day}>TP-1 </span>
        </date> */}
        <div id={styles.card__body}>
        <div id={styles.card__category}><a href="#">{a.tp}</a></div>
          <h2 id={styles.card__title}>
            <a className='flex' target="_blank" href="https://www.linkedin.com/in/midhamicky/?originalSubdomain=in">By : {a.instructor}<FaLinkedin  className='my-auto mx-2'/></a>
          </h2>
          <div id={styles.cardpricediv}>
            <h1 id={styles.card__pricea}>{a.price}</h1>
            <h1 id={styles.card__priceb}>{checkOther(a.other)}</h1>
          </div>
          <ul id={styles.card__description}>
            <li><FaRegClock className='my-auto mr-2' /><p>{a.details[0]}</p></li>
            <li><TbDevices className='my-auto mr-2' /><p>{a.details[1]}</p></li>
            <li><PiMedal className='my-auto mr-2'/><p>{a.details[2]}</p></li>
            <li><LuBookOpenCheck className='my-auto mr-2'/><p>{a.details[3]}</p></li>
            <li><LuPencilLine className='my-auto mr-2'/><p>{a.details[4]}</p></li>
          </ul>
        </div>
        <div id={styles.card__footer}>
          <div>
            <TbListDetails className='my-auto'/>
            <h1 className='text-xl my-1' >&nbsp;&nbsp;&nbsp;<Link href='https://www.midhafin.com/courses/FRM-Part-1-Self-Paced-Course-6284dad90cf2f73fd7f6034f'>VIEW DETAILS</Link></h1>
          </div>
        </div>
      </div>
    </div >
  )
}
