"use client"
import Link from 'next/link'
import React, { useState } from "react";
import Image from 'next/image'
import { IoMenu, IoClose } from "react-icons/io5";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="mx-auto  sticky top-0 z-10 bg-[#d8c9c9] backdrop-filter backdrop-blur-[2px] bg-opacity-40 border-b border-gray-100 firefox:bg-opacity-90">
            <div className='max-w-full mx-3 '>
                <div className="flex items-center justify-between lg:w-[100%] h-[60px] mx-auto pr-4">
                    <Link href='/'><Image width={250} height={150} className='ml-4 lg:ml-0 md:item-left h-auto' src="/Logo-with-garp.webp" alt="MidhaFin Logo" /></Link>
                    {toggle ?
                        <IoClose onClick={() => setToggle(!toggle)} className="text-2xl sm:hidden block" />
                        : <IoMenu onClick={() => setToggle(!toggle)} className="text-2xl sm:hidden block" />}

                    <ul className="hidden sm:flex items-right space-x-12 ">
                        <NavItem to="/courses" name="Courses" />
                        <NavItem to="/blog" name="Blogs" />
                        <NavItem to="/reviews" name="Reviews" />
                        <NavItem to="/contact-us" name="Contact Us" />
                        <NavItem to="https://www.midhafin.com/s/authenicate" name="Login" />
                    </ul>
                    {/* Responsive */}
                    <ul className={`sm:hidden w-[70%] h-auto fixed bg-[#faf1ed]  backdrop-filter backdrop-blur-lg bg-opacity-95 top-[80px] 
                     ${toggle ? "left-[0]" : "left-[-100%]"}`}>
                        <NavItem to="/courses" name="Courses" />
                        <NavItem to="/blog" name="Blogs" />
                        <NavItem to="/reviews" name="Reviews" />
                        <NavItem to="/contact-us" name="Contact Us" />
                        <NavItem to="https://www.midhafin.com/s/authenicate" name="Login" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ to, name }) => {
    return (
        <li className="relative group  hover:text-[#f7a787] p-4 sm:p-0">
            <Link
                href={to}
                className="font-semibold text-xl cursor-pointe pb-2 px-1 hover:text-[#6A1C1A] hover:border-b-[4px] border-transparent transition duration-300 group-hover:border-[#6A1B1B]">
                {name}
            </Link>
        </li>
    );
};
export default Navbar;

