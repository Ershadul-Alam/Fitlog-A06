"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import NavButtons from './NavButtons';
import { MyplanContext } from '@/app/context/MyplanContext';

const Navbar = () => {

    const { todaysPlan, saved } = useContext(MyplanContext);

    return (
        <nav>
            <div className='flex justify-around items-center mt-3'>
                <Link href="/" className='flex items-center'>
                    <Image
                        src="/logo.png"
                        width={20}
                        height={20}
                        alt="Logo"
                    />
                    <p className='text-white text-md font-medium ml-1'>FITLOG</p>
                </Link>

                <div className="flex items-center space-x-1 rounded-xl">
                    <NavButtons />
                </div>


                {/* Plan and saved */}
                <div className="flex items-center justify-center font-sans">
                    <div className="flex items-center gap-2">

                        { }
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-1 cursor-pointer"
                        >
                            <span className="text-[#e2e2e5] text-sm font-medium tracking-wide">
                                Plan
                            </span>
                            {/* Solid Neon Green Badge */}
                            <div className="w-[23px] h-[23px] flex items-center justify-center bg-[#d9f90f] text-black rounded-full font-medium text-sm shadow-[0_0_15px_rgba(217,249,15,0.15)]">
                                {todaysPlan.length}
                            </div>
                        </Link>

                        { }
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-1 cursor-pointer"
                        >
                            <span className="text-[#9ba1a6] text-sm font-medium tracking-wide">
                                Saved
                            </span>
                            {/* Transparent Bordered Badge */}
                            <div className="w-[26px] h-[26px] flex items-center justify-center bg-transparent border-2 border-[#2a2d35] text-[#d1d5db] rounded-full font-medium text-sm">
                                {saved.length}
                            </div>
                        </Link>

                    </div>

                </div>


            </div>
            <hr className="my-3 border-t border-gray-800" />
        </nav>

    );
};

export default Navbar;