import Link from "next/link";
import Image from 'next/image'

// import Image from "next/image";

// export default function SiteHeader({ className }) {
//     return (
//         <header className='flex items-center justify-between bg'>
//             <div className="logo-area">
//                 <Link href="/" className="flex justify-center">
//                     <Image width={300} height={150} src="/logo-with-garp.webp" alt="MidhaFin" />
//                 </Link>
//             </div>
//             <nav className="">
//                 <ul className=" flex justify-center [&>li>a]:px-3 [&>li>a]:py-2 [&>li>a:hover]:text-[#6A1B1B] [&>li>a:hover]:border-b-2  [&>li>a:hover]:border-[#6A1B1B]  [&>li>a]:transition text-xl">
//                     <li>
//                         <Link href="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/blog">Blog</Link>
//                     </li>
//                     <li>
//                         <Link href="/about">About</Link>
//                     </li>
//                     <li>
//                         <Link href="/contact">Contact</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }
import React from 'react';

const Navbar = () => {
    return (
        <nav className="p-4 border-[#6A1B1B] border-b-[2px]  shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px;">
            <div className="flex items-center justify-between  ">
                <div className=" font-bold text-lg"><Image alt='MidhaFin' width={300} height={200} src='/Logo-with-garp.webp' /></div>
                <ul className="flex space-x-12 ">
                    <NavItem to="/" name="Home" />
                    <NavItem to="/about" name="About" />
                    <NavItem to="/blog" name="Blogs" />
                    <NavItem to="/contact" name="Contact" />

                </ul>
            </div>
        </nav>
    );
};

const NavItem = ({ to, name }) => {
    return (
        <li className="relative group w-[100%]">
            <Link
                href={to}
                className="font-semibold text-xl cursor-pointe pb-2 px-1 hover:text-[#6A1C1A] hover:border-b-[4px] border-transparent transition duration-300 group-hover:border-[#6A1B1B]">
                {name}
            </Link>
        </li>
    );
};

export default Navbar;
