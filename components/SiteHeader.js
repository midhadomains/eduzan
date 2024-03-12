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
                    <Link href='/'><Image width={250} height={40} className='ml-4 lg:ml-0 md:item-left w-[200px] h-[30px] lg:w-auto lg:h-[40px] ' src="/Logo-with-garp.webp" alt="MidhaFin Logo" /></Link>
                    {toggle ?
                        <IoClose onClick={() => setToggle(!toggle)} className="text-2xl md:hidden block" />
                        : <IoMenu onClick={() => setToggle(!toggle)} className="text-2xl md:hidden block" />}

                    <ul className="hidden md:flex  justify-around flex-nowrap w-[70%] lg:w-[60%] xl:w-[50%] ">
                        <NavItem to='https://midhafin.ongraphy.com/s/mycourses' name='Student Portal' />
                        {/* <NavItem to="/blog" name="Blogs" /> */}
                        <NavItem to="https://midhafin.ongraphy.com/s/store" name="Courses" />
                        <NavItem to="/reviews" name="Reviews" />
                        <NavItem to="/contact-us" name="Contact Us" />
                        <NavItem to="https://midhafin.ongraphy.com/s/authenticate" name="Login" />
                    </ul>
                    {/* Responsive */}
                    <ul className={`md:hidden w-[50%] sm:w-[40%] md-[30%] h-auto fixed bg-[#ecebea]  backdrop-filter backdrop-blur-lg bg-opacity-95 top-[60px] 
                     ${toggle ? "right-[0]" : "hidden"}`}>
                        <NavItem to='https://midhafin.ongraphy.com/s/mycourses' name='Student Portal' />
                        {/* <NavItem to="/blog" name="Blogs" /> */}
                        <NavItem to="https://midhafin.ongraphy.com/s/store" name="Courses" />
                        <NavItem to="/reviews" name="Reviews" />
                        <NavItem to="/contact-us" name="Contact Us" />
                        <NavItem to="https://midhafin.ongraphy.com/s/authenticate" name="Login" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ to, name }) => {
    return (
        <li className="relative group  hover:text-[#6A1C1A] p-4 md:p-0">
            <Link
                href={to}
                className="font-semibold text-lg   lg:text-xl cursor-pointe pb-2 px-1 hover:text-[#6A1C1A] hover:border-b-[4px] border-transparent transition duration-300 group-hover:border-[#6A1B1B]">
                {name}
            </Link>
        </li>
    );
};
export default Navbar;


