import Image from 'next/image'
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Navbar from './SiteHeader';
import Footer from './SiteFooter';

// async function getData() {
//   const res = await fetch('https://midhareviewapi.vercel.app/reviews')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary

//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }
function capitalizeWords(str) {
  return str.replace(/\b\w/g, match => match.toUpperCase());
}

export default function Reviews() {
  // export default async function Reviews() {

  // const data = await getData()
  const data = [
    {
      "_id": "65f1635ab778e21b1aed83ea",
      "name": "aminoritse adedayo",
      "image": "https://files.midhafin.com/wp-content/uploads/Aminoritse-Adedayo.png",
      "country": "Ireland",
      "job": "Senior Associate at FMS Wertmanagement Service GmbH",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7151246725607747584/?utm_source=share&utm_medium=member_desktop",
      "l_link": "https://www.linkedin.com/in/aminoritse-adedayo-frm%C2%AE-58386480/",
      "v_link": "",
      "course": "FRM part-2",
      "excerpt": "I am Super excited to share that I have passed FRM Part II Exam on Ist attempt. My heartfelt Gratitude to Micky Midha and team MidhaFin"
    },
    {
      "_id": "65f1635ab778e21b1aed83f8",
      "name": "Naresh Gaur",
      "image": "https://files.midhafin.com/wp-content/uploads/Naresh-Gaur.jpg",
      "country": "U.S.A.",
      "job": "Finance | Liquidity Management | Capital Markets",
      "p_link": "https://www.quora.com/Which-are-the-best-classes-for-FRM-GARP-in-Chennai/answer/Naresh-Gaur-17?ch=10&oid=155034217&share=979be00d&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/nareshgaur/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I started studying for FRM after clearing Levels 1 to 3 of CFA. I observed that FRM requires a different kind of mindset and with 100 questions in 4 hours in Level."
    },
    {
      "_id": "65f1635ab778e21b1aed83e1",
      "name": "vivek pradhan",
      "image": "https://files.midhafin.com/wp-content/uploads/Vivek-Pradhan.png",
      "country": "India",
      "job": "Manager (Projects) in Housing and Urban Development Corporation Ltd",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7150492009563090944/",
      "l_link": "https://www.linkedin.com/in/vivek-pradhan-b9a7b111b/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "Delighted to share that I have cleared the FRM Part-I Nov 23 Exam. Looking forward to conquering the Part II exam. I followed a self."
    },
    {
      "_id": "65f1635ab778e21b1aed83e3",
      "name": "chetan kumar",
      "image": "https://files.midhafin.com/wp-content/uploads/Chetan-Kumar.png",
      "country": "India",
      "job": "FRM LEVEL 1 AU SMALL FINANCE BANK LTD.",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7148732289580003328/",
      "l_link": "https://www.linkedin.com/in/chetan-kumar-842779262/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I'm thrilled to share that I have successfully passed the Financial Risk Manager (FRM) Level 1 exam!.The journey was challenging,but the knowledge gained is invaluable."
    },
    {
      "_id": "65f1635ab778e21b1aed83e4",
      "name": "manish upadhye",
      "image": "https://files.midhafin.com/wp-content/uploads/Manish-Upadhye.png",
      "country": "India",
      "job": "Global Cash Management @ CLSA",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7149651651623124992/",
      "l_link": "https://www.linkedin.com/in/manish-upadhye-600901222/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I'm excited to share my educational milestone of passing FRM-1 exam by Global Association of Risk Professionals (GARP) in first attempt.While working full time"
    },
    {
      "_id": "65f1635ab778e21b1aed83e5",
      "name": "avinaba Roy",
      "image": "https://files.midhafin.com/wp-content/uploads/Avinaba-Roy.png",
      "country": "India",
      "job": "Lead Quantitative Analyst at CRISIL (S&P Global)",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7148976624116412416/",
      "l_link": "https://www.linkedin.com/in/royavi/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "New year starts with some positive news, academically Glad to share that I have cleared the GARP FRM Part 1 exam in November 2023 attempt, with"
    },
    {
      "_id": "65f1635ab778e21b1aed83e7",
      "name": "santosh kumar",
      "image": "https://files.midhafin.com/wp-content/uploads/Santosh-Kumar.png",
      "country": "India",
      "job": "Union Bank of India",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:6949775561451810817/?utm_source=share&utm_medium=member_desktop",
      "l_link": "https://www.linkedin.com/in/santosh-kumar-certified-frm-b11912217/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I sincerely thanks Micky Midha sir and team Midhafin for their continuous support, guidance and unique study materials, which enabled me to clear FRM level 1 exam"
    },
    {
      "_id": "65f1635ab778e21b1aed83ef",
      "name": "Kayode Samuel",
      "image": "https://files.midhafin.com/wp-content/uploads/Kayode-Samuel.jpg",
      "country": "Nigeria",
      "job": "Portfolio Head, Internal Audit - Business & Commercial Banking, Stanbic IBTC Bank",
      "p_link": "https://www.linkedin.com/posts/kayode-samuel-akintola-fca-acma-cgma-cior-97132133_frm-2-november-2023-result-activity-7152685824839409665-Gpd_/?utm_source=share&utm_medium=member_desktop",
      "l_link": "https://www.linkedin.com/in/kayode-samuel-akintola-fca-acma-cgma-cior-97132133/",
      "v_link": "",
      "course": "FRM part-2",
      "excerpt": "I would like to thank @Micky Midha for his support through my FRM - part 1 and Part 2 at first attempt. At @MidhaFin candidates are guided on the appropriate."
    },
    {
      "_id": "65f1635ab778e21b1aed83f1",
      "name": "Palak Hasija",
      "image": "https://files.midhafin.com/wp-content/uploads/Palak-Hasija.png",
      "country": "India",
      "job": "ENO - Counterparty Credit Risk",
      "p_link": "https://www.linkedin.com/in/palak-hasija-94727116b/recent-activity/all/",
      "l_link": "https://www.linkedin.com/in/palak-hasija-94727116b/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "Extremely happy to share that I have cleared FRM level 1. Thanks alot Micky Midha sir for your constant support and guidance."
    },
    {
      "_id": "65f1635ab778e21b1aed83f4",
      "name": "Partha Nandy",
      "image": "https://files.midhafin.com/wp-content/uploads/Partha-Nandy.png",
      "country": "India",
      "job": " Risk Manager at HSBC ",
      "p_link": "https://www.quora.com/What-is-the-best-course-for-FRM/answer/Partha-Nandy-12?ch=10&oid=116471644&share=34bb2e82&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/partha-nandy-1bb9871b/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I have attended MF instructor Micky Midha online classes. The way he explains concepts of duration , convexity , option Greeks is excellent. More importantly anytime."
    },
    {
      "_id": "65f1635ab778e21b1aed83f6",
      "name": "Mahak Bagaria",
      "image": "https://files.midhafin.com/wp-content/uploads/Mahak-Bagaria.png",
      "country": "India",
      "job": "Goldman Sachs",
      "p_link": "https://www.quora.com/Do-we-really-need-to-join-a-coaching-class-for-FRM/answer/Mahak-Bagaria?ch=10&oid=189992971&share=44351b2f&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/mahak-bagaria-98953416a/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I appeared for the November 2019 exam, and cleared the part 1 exam in the first attempt. Being from a non-finance background, initially,"
    },
    {
      "_id": "65f1635ab778e21b1aed83fa",
      "name": "Lavnya Ajmera",
      "image": "https://files.midhafin.com/wp-content/uploads/Lavnya-Ajmera.jpg",
      "country": "India",
      "job": "Market Risk Analyst at NatWest Markets Plc",
      "p_link": "https://www.quora.com/Which-is-the-best-coaching-for-FRM-online-DTH/answer/Lavnya-Ajmera?ch=10&oid=327004727&share=032ee6fe&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/lavnya-ajmera-4b2a4a207/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I decided to give the FRM exam and took coaching from Micky Midha Sir and joined MidhaFin classes for the same in July 2020 with no prior knowledge in"
    },
    {
      "_id": "65f1635ab778e21b1aed83fb",
      "name": "Dhruv Anand",
      "image": "https://files.midhafin.com/wp-content/uploads/Dhruv-Anand.png",
      "country": "India",
      "job": "",
      "p_link": "https://www.quora.com/Which-is-the-best-study-material-for-FRM-part-1/answer/Dhruv-Anand-24?ch=10&oid=268239359&share=d75e4494&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/dhruv-anand-a48a32120/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I cleared FRM part 1 in January 2021 as It was postponed due to Covid. I joined MidhaFin after going through their trial video's."
    },
    {
      "_id": "65f1635ab778e21b1aed83e6",
      "name": "amarjit singh",
      "image": "https://files.midhafin.com/wp-content/uploads/Amarjit-Singh.png",
      "country": "India",
      "job": "Chief Dealer Treasury ACFCS",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7151874257638096896/",
      "l_link": "https://www.linkedin.com/in/amarjit-singh-67956216/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I am glad to share that I have cleared FRM PART I. I would like to thank Micky Midha Sir and MidhaFin (MF) team for their support."
    },
    {
      "_id": "65f1635ab778e21b1aed83ed",
      "name": "Ravikant Kumar",
      "image": "https://files.midhafin.com/wp-content/uploads/Ravikant-Kumar.png",
      "country": "India",
      "job": "Business Analyst",
      "p_link": "https://www.linkedin.com/posts/ravikant-kumar-frm-35881722_frm-part-1-result-letter-activity-6771809261392683009-LMck/?utm_source=share&utm_medium=member_desktop",
      "l_link": "https://www.linkedin.com/in/ravikant-kumar-frm-35881722/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "Happy to share that i have cleared FRM Part -1 #Financialriskmanagement #GARP#. I would like to thanks Micky Midha sir for his guidance and support."
    },
    {
      "_id": "65f1635ab778e21b1aed83ee",
      "name": "Kayode Samuel",
      "image": "https://files.midhafin.com/wp-content/uploads/Kayode-Samuel.jpg",
      "country": "Nigeria",
      "job": "Portfolio Head, Internal Audit - Business & Commercial Banking, Stanbic IBTC Bank",
      "p_link": "https://www.linkedin.com/posts/kayode-samuel-akintola-fca-acma-cgma-cior-97132133_frm-2-november-2023-result-activity-7152685824839409665-Gpd_/?utm_source=share&utm_medium=member_desktop",
      "l_link": "https://www.linkedin.com/in/kayode-samuel-akintola-fca-acma-cgma-cior-97132133/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I would like to thank @Micky Midha for his support through my FRM - part 1 and Part 2 at first attempt. At @MidhaFin candidates are guided."
    },
    {
      "_id": "65f1635ab778e21b1aed83f0",
      "name": "Saswata Chowdhury",
      "image": "https://files.midhafin.com/wp-content/uploads/Saswata-Chowdhury.jpg",
      "country": "India",
      "job": "Associate Director (Liquidity Risk Management) | cognext.ai",
      "p_link": "https://www.quora.com/Which-is-the-best-coaching-institute-for-a-financial-risk-management-FRM-certification-in-India/answer/Saswata-Chowdhury-18?ch=10&oid=316496156&share=7aa34051&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/saswata-chowdhury-frm-293844207/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I enrolled myself with GARP in the year 2020 to appear for 2021 jan exam. I decided to join MidhaFin online exam and I passed Jan 2021."
    },
    {
      "_id": "65f1635ab778e21b1aed83fd",
      "name": "aditya midha",
      "image": "https://files.midhafin.com/wp-content/uploads/Aditya-Midha.png",
      "country": "India",
      "job": "",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7148855664960782336/",
      "l_link": "https://www.linkedin.com/in/aditya-midha-24713b1b7/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "Hi,I am happy to announce that I have cleared my FRM Part 1 Exam.Apart from the knowledge gained, discipline and time management are the"
    },
    {
      "_id": "65f1635ab778e21b1aed83e2",
      "name": "vishwanath makela",
      "image": "https://files.midhafin.com/wp-content/uploads/Vishwanath-Makela.png",
      "country": "India",
      "job": "Credit Analyst @ Bank of Maharashtra",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7148727976786812929/",
      "l_link": "https://www.linkedin.com/in/viswanath-mekala-b694b976/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I’m happy to share that I’ve obtained a new certification: Financial Risk Manager - FRM (Part 1) from Global Association of Risk Professionals (GARP)"
    },
    {
      "_id": "65f1635ab778e21b1aed83e8",
      "name": "santosh kumar",
      "image": "https://files.midhafin.com/wp-content/uploads/Santosh-Kumar.png",
      "country": "India",
      "job": "Union Bank of India",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7151531889516802048/?utm_source=share&utm_medium=member_desktop",
      "l_link": "https://www.linkedin.com/in/santosh-kumar-certified-frm-b11912217/",
      "v_link": "",
      "course": "FRM part-2",
      "excerpt": "Elated to share that I have passed FRM level 2 with the consistent support and guidance from Micky Midha and team MidhaFin (MF)"
    },
    {
      "_id": "65f1635ab778e21b1aed83e9",
      "name": "aminoritse adedayo",
      "image": "https://files.midhafin.com/wp-content/uploads/Aminoritse-Adedayo.png",
      "country": "Ireland",
      "job": "Senior Associate at FMS Wertmanagement Service GmbH",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7018880735616880640/?utm_source=share&utm_medium=member_desktop",
      "l_link": "https://www.linkedin.com/in/aminoritse-adedayo-frm%C2%AE-58386480/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I am Super excited to share that I Passed FRM Level 1 exam. All Glory to GOD and my Sincere Appreciation and Thanks to MICKY MIDHA ."
    },
    {
      "_id": "65f1635ab778e21b1aed83eb",
      "name": "vikramjeet singh",
      "image": "https://files.midhafin.com/wp-content/uploads/Vikramjeet-Singh.png",
      "country": "New Zealand",
      "job": "Financial Crime Analyst at Entain",
      "p_link": "https://www.linkedin.com/posts/vikramjeet-singh-frm-cgss-cams-pgdip-banking-mba-1394b421_frm-personaldevelopment-neverstoplearning-activity-7016529010700541952-HyqK/?utm_source=share&utm_medium=member_desktop",
      "l_link": "https://www.linkedin.com/in/vikramjeet-singh-frm-cgss-cams-pgdip-banking-mba-1394b421/",
      "v_link": "",
      "course": "FRM part-2",
      "excerpt": "I am overjoyed and delighted to announce the passing of Financial Risk Manager (FRM) part 1 exam. What a wonderful way to start 2023!Throughout the journey,"
    },
    {
      "_id": "65f1635ab778e21b1aed83f2",
      "name": "Faizan Kousar",
      "image": "https://files.midhafin.com/wp-content/uploads/Faizan-Kousar.png",
      "country": "India",
      "job": "Credit Suisse",
      "p_link": "https://www.quora.com/Which-online-coaching-institute-is-best-for-the-FRM/answer/Faizan-Kousar?ch=10&oid=334785024&share=a4dc6e93&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/faizan-kousar1999/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I have cleared Nov’21 FRM Part 1 exam and MidhaFin had played a vital role in making sure that the candidate is able to tackle the kind."
    },
    {
      "_id": "65f1635ab778e21b1aed83f3",
      "name": "Shadma Khan",
      "image": "https://files.midhafin.com/wp-content/uploads/Shadma-Khan.png",
      "country": "India",
      "job": "Chief Manager at Central Bank Of India",
      "p_link": "https://www.quora.com/Which-online-classes-are-best-for-FRM-Level-1/answer/Shadma-Khan-1?ch=10&oid=92851498&share=a67db2e2&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/shadma-khan-frm-17788a26/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I cleared FRM Part 2 in November 2018 and FRM Part 1 in May 2018 , BOTH under the supervision of Micky Midha. His institution is GARP authorised."
    },
    {
      "_id": "65f1635ab778e21b1aed83f5",
      "name": "Upanshu Gaharana",
      "image": "https://files.midhafin.com/wp-content/uploads/Upanshu-Gaharana.png",
      "country": "India",
      "job": "Credit Suisse | ENO-Chief Risk Officer ",
      "p_link": "https://www.quora.com/How-do-I-prepare-for-FRM-level-1/answer/Upanshu-Gaharana-1?ch=10&oid=191061013&share=ae8aa024&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/ug0607199/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "To make myself eligible for answering the question, i need to tell you that i had cleared FRM Part 1 in first attempt with quartiles 2222 (in november 19)."
    },
    {
      "_id": "65f1635ab778e21b1aed83f7",
      "name": "Nikhil Nair",
      "image": "https://files.midhafin.com/wp-content/uploads/Nikhil-Nair.png",
      "country": "India",
      "job": "Bain & Co.",
      "p_link": "https://www.quora.com/Can-one-clear-FRM-level-1-and-2-without-coaching/answer/Nikhil-Nair-115?ch=10&oid=152284631&share=b0eb2c5c&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/ca-nikhil-nair/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I cleared FRM Part I without coaching in Nov 2017. I took Part II in May and Nov 2018 without coaching, and without success. I finally cleared Part II."
    },
    {
      "_id": "65f1635ab778e21b1aed83f9",
      "name": "Acchintya S Talwarr",
      "image": "https://files.midhafin.com/wp-content/uploads/Acchintya-S-Talwar.png",
      "country": "Canada ",
      "job": "Digital Consultant @ EXL",
      "p_link": "https://www.quora.com/Can-anyone-help-me-choose-a-good-FRM-online-coaching/answer/Achintya-Talwar-1?ch=10&oid=151196357&share=6c505096&srid=q4YhH&target_type=answer",
      "l_link": "https://www.linkedin.com/in/acchintyastalwarr/",
      "v_link": "",
      "course": "FRM part-2",
      "excerpt": "I cleared FRM level 2 in the first attempt with Quartile 1 in all sections.I began reading the chapters and soon realised that many topics went above my head."
    },
    {
      "_id": "65f1635ab778e21b1aed83fc",
      "name": "nandhaa palanivel",
      "image": "https://files.midhafin.com/wp-content/uploads/Nandhaa-Palanivel.png",
      "country": "India",
      "job": "",
      "p_link": "https://www.linkedin.com/feed/update/urn:li:activity:7154105341046083584/",
      "l_link": "https://www.linkedin.com/in/nandhaa-palanivel-a80127261/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "I'm happy to share that I have completed my FRM PART 1 Examination.I would also like to convey my thanks to Micky Midha"
    },
    {
      "_id": "660679a39f43ce8bbe198b43",
      "name": "vikramjeet Singh",
      "image": "https://files.midhafin.com/wp-content/uploads/Vikramjeet-Singh.png",
      "country": "New Zealand",
      "job": "Financial Crime Analyst at Entain",
      "p_link": "https://www.quora.com/What-is-the-best-online-course-for-the-Financial-Risk-Manager-FRM-part-1-and-part-2/answer/Vikramjeet-Singh-496?ch=15&oid=1477743750045464&share=93c43d6b&srid=upfbLO&target_type=answer",
      "l_link": "https://www.linkedin.com/in/vikramjeet-singh-frm-cgss-cams-pgdip-banking-mba-1394b421/",
      "v_link": "",
      "course": "FRM part-1",
      "excerpt": "The self-paced course offered for FRM exam preparation by Midha Fin is an excellent choice for individuals who prefer flexibility and autonomy in..."
    },
    {
      '_id': ' ',
      'name': 'Chaya Jayasankar',
      'image': 'https://files.midhafin.com/wp-content/uploads/Chaya-Jayasankar.jpeg',
      'country': 'India',
      'job': 'CustomerLabs',
      'p_link': 'https://www.linkedin.com/posts/activity-6767741889992122368-DpoV?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/chaya-jayasankar/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'I managed to secure in the 76th-100th percentile range in Foundations of Risk Management, Quantitative Analysis and Financial Markets and Products.'
    },


    {
      '_id': ' ',
      'name': 'Monalisa Prasad',
      'image': 'https://files.midhafin.com/wp-content/uploads/Monalisa-Prasad.jpeg',
      'country': 'India',
      'job': 'JPMC',
      'p_link': 'https://www.linkedin.com/posts/monalisa-prasad-she-her-hers-974a7a50_financialriskmanagement-frmpart1-garp-activity-6767492591169740800-3JcB?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/monalisa-prasad-she-her-hers-974a7a50/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'I am glad to share that I have cleared FRM part1 (first attempt)  Thanks Micky Midha for your guidance and support.'
    },


    {
      '_id': ' ',
      'name': 'Karnika',
      'image': 'https://files.midhafin.com/wp-content/uploads/Karnika.jpeg',
      'country': 'India',
      'job': 'Fitch Solutions',
      'p_link': 'https://www.linkedin.com/posts/karnika-frm%C2%AE-scr%C2%AE-6a4486b8_frm1-financialriskmanagement-garp-activity-6769673084321492992-ST3A?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/karnika-frm%C2%AE-scr%C2%AE-6a4486b8/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'would like to take this opportunity to thanks Micky Midha sir, for his guidance and motivation which helped me to clear exam in my first attempt.'
    },

    {
      '_id': ' ',
      'name': 'Karnika',
      'image': 'https://files.midhafin.com/wp-content/uploads/Karnika.jpeg',
      'country': 'India',
      'job': 'Fitch Solutions',
      'p_link': 'https://www.linkedin.com/posts/karnika-frm%C2%AE-scr%C2%AE-6a4486b8_midhafin-garp-frm-activity-6970053663981461504-NZxg?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/karnika-frm%C2%AE-scr%C2%AE-6a4486b8/',
      'v_link': ' ',
      'course': 'FRM part-2',
      'excerpt': 'I would like to thank Micky Midha and Vishwanathan Iyer, CPA, FRM® for their guidance, which made me clear both the parts in the first attempt. '
    },

    {
      '_id': ' ',
      'name': 'Dhruv Anand',
      'image': 'https://files.midhafin.com/wp-content/uploads/Dhruv-Anand.jpeg',
      'country': 'India',
      'job': 'Srijan- A Material+ Company',
      'p_link': 'https://www.linkedin.com/posts/dhruvanand1319_frm-garp-riskmanagement-activity-6771372026818019328-Bq_y?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/dhruvanand1319/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'I am glad to share that I have cleared FRM part 1. Thank you Micky Midha for your guidance and support.'
    },

    {
      '_id': ' ',
      'name': 'Kanika Sikka Chandok',
      'image': 'https://files.midhafin.com/wp-content/uploads/Kanika-Sikka-Chandok.jpeg',
      'country': 'India',
      'job': 'Barclays',
      'p_link': 'https://www.linkedin.com/posts/kanika-sikka-chandok-frm-00584a17_frm-part-1-result-activity-6887714512405860352-m2eR?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/kanika-sikka-chandok-frm-00584a17/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'Thank you @Micky Midha for your continuous guidance and support. This learning journey was truly amazing'
    },

    {
      '_id': ' ',
      'name': 'Kanika Sikka Chandok',
      'image': 'https://files.midhafin.com/wp-content/uploads/Kanika-Sikka-Chandok.jpeg',
      'country': 'India',
      'job': 'Barclays',
      'p_link': 'https://www.linkedin.com/posts/kanika-sikka-chandok-frm-00584a17_i-am-elated-to-announce-that-i-cleared-my-activity-6951564190499172352-dQ7e?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/kanika-sikka-chandok-frm-00584a17/',
      'v_link': ' ',
      'course': 'FRM part-2',
      'excerpt': 'I would like to extend my gratitude to Micky Midha for his continuous support and encouragement.'
    },


    {
      '_id': ' ',
      'name': 'GOURI SINHASANE',
      'image': 'https://files.midhafin.com/wp-content/uploads/Gouri-Sihasane.jpeg',
      'country': 'India',
      'job': 'Bank of India',
      'p_link': 'https://www.linkedin.com/posts/gouri-sinhasane-frm-442a931b8_share-frm-financialriskmanagement-activity-6886973030225055744-BjVj?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/gouri-sinhasane-frm-442a931b8/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'special Thank you to Micky Midha Sir for his Valuable support and patiently resolving each and every query and doubt about the curriculum.'
    },


    {
      '_id': ' ',
      'name': 'Kush Maheshwari',
      'image': 'https://files.midhafin.com/wp-content/uploads/Kush-Maheshwari.jpeg',
      'country': 'India',
      'job': 'Bajaj Allianz Life',
      'p_link': 'https://www.linkedin.com/posts/kush-maheshwari_passing-letter-activity-6887710561392459776-zcDI?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/kush-maheshwari/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'Thank you Micky Midha sir and MidhaFin (MF) for the guidance and support.'
    },

    {
      '_id': ' ',
      'name': 'Lubna Khan Pathan',
      'image': 'https://files.midhafin.com/wp-content/uploads/Lubna-Khan-Pathan.jpeg',
      'country': 'India',
      'job': 'HDFC Mutual Fund',
      'p_link': 'https://www.linkedin.com/posts/lubna-khan-pathan-a43818152_extremely-happy-to-successfully-clear-frm-activity-6887037840081997824-LZcT?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/lubna-khan-pathan-a43818152/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'Extremely happy to successfully clear FRM Level 1 exam. Thank you Micky Midha for your guidance and support.'
    },
    {
      '_id': ' ',
      'name': 'soumyajit saha',
      'image': 'https://files.midhafin.com/wp-content/uploads/Soumyajit-Saha.jpeg',
      'country': 'London, England, United Kingdom',
      'job': 'BDO UK LLP',
      'p_link': 'https://www.linkedin.com/posts/soumyajit-saha-jit_frm-part-one-result-activity-6887374730307883008-DZGE?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/soumyajit-saha-jit/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'Special thanks to Micky Midha Sir and his team at MidhaFin (MF) for their teaching, constant guidance and support.'
    },
    {
      '_id': ' ',
      'name': 'Kritika Narayan',
      'image': 'https://files.midhafin.com/wp-content/uploads/Kritika-Narayan.jpeg',
      'country': 'India',
      'job': 'Accenture Strategy & Consulting',
      'p_link': 'https://www.linkedin.com/posts/kritika-narayan-b9b525a0_happy-to-share-that-i-have-cleared-frm-part-activity-6887384907035897856-h-Hk?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/kritika-narayan-b9b525a0/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'Thank you Micky Midha for all the guidance and support.'
    },
    {
      '_id': ' ',
      'name': 'Karan Rahat Singh Manchanda',
      'image': 'https://files.midhafin.com/wp-content/uploads/Karan-Rahat-Singh-Manchanda.png',
      'country': 'India',
      'job': 'Accenture Strategy & Consulting',
      'p_link': 'https://www.linkedin.com/posts/karanrahatsinghmanchanda_linkedincommunity-frm-financialriskmanager-activity-7098578551825707008-U5b7?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/karanrahatsinghmanchanda/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'Thankyou Micky Midha Sir for your guidance and support throughout the journey!'
    },
    {
      '_id': ' ',
      'name': 'Ramesh Kumar Vadlamani',
      'image': 'https://files.midhafin.com/wp-content/uploads/Ramesh-Kumar-Vadlamani.jpeg',
      'country': 'Calgary, Alberta, Canada',
      'job': 'Eagle suite of Products',
      'p_link': 'https://www.linkedin.com/posts/ramesh-kumar-vadlamani-1085727_hello-everyone-i-am-extremely-pleased-activity-6844412668821041152-yfwG?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/ramesh-kumar-vadlamani-1085727/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': ' Special thanks to Micky Midha and Midhafin team for their guidance and support.'
    },
    {
      '_id': ' ',
      'name': 'Tara Sherigar',
      'image': 'https://files.midhafin.com/wp-content/uploads/Tara-Sherigar.jpeg',
      'country': 'India',
      'job': 'RAKBANK',
      'p_link': 'https://www.linkedin.com/posts/activity-6904411786456756225-VXJl?utm_source=share&utm_medium=member_desktop',
      'l_link': 'https://www.linkedin.com/in/tara-sherigar-ca-frm-1860a028/',
      'v_link': ' ',
      'course': 'FRM part-1',
      'excerpt': 'Thanks to Micky Midha for the support and guidance for FRM Level 1.'
    },
  ]
  return (
    <>
      <Navbar />
      <div className='p-5 bg-gradient-to-b from-[#e9e5e3] to-red-100 '>
        <div className="w-[95%]">
          <h1 className="font-bold text-[40px] text-center my-4 ">Don&apos;t believe us, Hear from our students</h1>
        </div>
        {data ? (
          <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-9 w-[90%] mx-auto'>
            {data.map((review, index) => (
              <li key={index} data-aos="zoom-in-up" className='border-[3px] border-[#faf4f1] mt-[60px] rounded-2xl p-4 pt-9 bg-white relative backdrop-filter backdrop-blur-[1px] bg-opacity-[50px] shadow-inner'>
                {/* <Image width={90} height={30} alt='image' src='/MidhaFin-logo.webp' className='fixed bottom-1 right-1' /> */}
                <h1 className='text-amber-700  fixed top-2 right-3'>{review.course}</h1>

                <p className='fixed top-2 left-3'>{review.country}</p>
                <div className='bg-grey-900  h-[100%] '>
                  <div className=' items-center flex flex-col justify-between  h-[100%] text-center my-1'>
                    <h1 className='text-[#6A1B1B] text-xl font-semibold m-1 flex'>{capitalizeWords(review.name)} <Link target='_blank' href={review.l_link}><FaLinkedin className='mt-1 ml-1 text-black hover:cursor-pointer' /></Link></h1>
                    <Image width={120} height={120} src={review.image} alt={review.name} priority={true} className='w-[100px] absolute  border-[#ffffff] -top-[65px] mx-auto rounded-[50%] border t-[40px] shadow-lg?":' />
                    <h1 className='text-center'>&quot; {`${review.excerpt}`}...<Link href={review.p_link} className='underline'>Read More</Link> &quot;</h1>
                    <h1 className='text-amber-700 m-2'>{review.job}</h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-2xl my-3'>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  )
}
