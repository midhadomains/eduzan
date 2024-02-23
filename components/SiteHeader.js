"use client"
import Link from 'next/link'
import React, { useState } from "react";
import Image from 'next/image'
import { IoMenu, IoClose } from "react-icons/io5";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="sticky top-0 z-10 bg-[#fcefea] backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-100 firefox:bg-opacity-90">
            <div className='max-w-full mx-auto '>
                <div className="flex items-center justify-between lg:w-[80%] h-20 mx-auto pr-4">
                    {/* <img className="min-w-[150px]" alt='MidhaFin' src={logo} /> */}
                    <Image width={250} height={150} className='ml-4 lg:ml-0 md:item-left h-auto' src="/Logo-with-garp.webp" alt="MidhaFin Logo" />
                    {toggle ?
                        <IoClose onClick={() => setToggle(!toggle)} className="text-2xl sm:hidden block" />
                        : <IoMenu onClick={() => setToggle(!toggle)} className="text-2xl sm:hidden block" />}

                    <ul className="hidden sm:flex items-right space-x-12 ">
                        <NavItem to="/" name="Home" />
                        <NavItem to="/blog" name="Blogs" />
                        <NavItem to="/courses" name="Courses" />
                        <NavItem to="/courses" name="Courses" />
                    </ul>
                    {/* Responsive */}
                    <ul className={`sm:hidden w-[50%] h-auto fixed bg-[#faf1ed]  backdrop-filter backdrop-blur-lg bg-opacity-95 top-[80px] 
                     ${toggle?"left-[0]":"left-[-100%]"}`}>
                        <NavItem to="/" name="Home" />
                        <NavItem to="/blog" name="Blogs" />
                        <NavItem to="/courses" name="Courses" />
                        <NavItem to="/contact" name="Contact" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ to, name }) => {
    return (
        <li className="relative group w-[100%] hover:text-[#f7a787] p-5 sm:p-0">
            <Link
                href={to}
                className="font-semibold text-xl cursor-pointe pb-2 px-1 hover:text-[#6A1C1A] hover:border-b-[4px] border-transparent transition duration-300 group-hover:border-[#6A1B1B]">
                {name}
            </Link>
        </li>
    );
};
export default Navbar;


