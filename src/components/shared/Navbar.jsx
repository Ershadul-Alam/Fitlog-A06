"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import NavButtons from './NavButtons';
import { MyplanContext } from '@/app/context/MyplanContext';

const Navbar = () => {

    const { todaysPlan, saved } = useContext(MyplanContext);

    return (
        <nav className='sticky top-0 z-50 bg-black'>
            <div className='container mx-auto mt-2 flex max-w-352 items-center justify-between gap-0 px-0 sm:mt-4 sm:justify-around sm:gap-1 sm:px-4'>
                <Link href="/" className='flex shrink-0 items-center'>
                    <Image
                        src="/logo.png"
                        width={20}
                        height={20}
                        alt="Logo"
                        className="size-3.5 sm:size-5"
                    />
                    <p className='ml-1 text-[11px] font-bold text-white sm:text-lg'>FITLOG</p>
                </Link>

                <div className="flex shrink-0 items-center rounded-xl">
                    <NavButtons />
                </div>


                {/* Plan and saved */}
                <div className="flex shrink-0 items-center justify-center font-sans">
                    <div className="flex items-center gap-1 sm:gap-3">

                        { }
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-0 cursor-pointer"
                        >
                            <span className="text-[10px] font-medium tracking-wide text-[#e2e2e5] sm:text-sm">
                                Plan
                            </span>
                            {/* Solid Neon Green Badge */}
                            <div className="flex size-4 items-center justify-center rounded-full bg-[#d9f90f] text-[10px] font-medium text-black shadow-[0_0_15px_rgba(217,249,15,0.15)] sm:size-5.75 sm:text-sm">
                                {todaysPlan.length}
                            </div>
                        </Link>

                        { }
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-0 cursor-pointer"
                        >
                            <span className="text-[10px] font-medium tracking-wide text-[#9ba1a6] sm:text-sm">
                                Saved
                            </span>
                            {/* Transparent Bordered Badge */}
                            <div className="flex size-4 items-center justify-center rounded-full border-2 border-[#2a2d35] bg-transparent text-[10px] font-medium text-[#d1d5db] sm:size-6.5 sm:text-sm">
                                {saved.length}
                            </div>
                        </Link>

                    </div>

                </div>


            </div>
            <hr className="mt-3 border-t border-gray-800" />
        </nav>

    );
};

export default Navbar;