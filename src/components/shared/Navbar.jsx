"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import NavButtons from './NavButtons';
import { MyplanContext } from '@/app/context/MyplanContext';

const Navbar = () => {

        const {todaysPlan, saved} = useContext(MyplanContext);

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
                    <p className='text-white ml-1'>FITLOG</p>
                </Link>

                <div className="flex items-center space-x-1 rounded-xl">
                    <NavButtons/>
                </div>

                <div>
                    <Link href="/my-plan" className="hover:text-gray-300 text-white">
                        {`Plan(${todaysPlan.length})`}
                    </Link>
                    <Link href="/my-plan" className="hover:text-gray-300 text-white">
                        {`Saved(${saved.length})`}
                    </Link>
                </div>
            </div>
            <hr className="my-3 border-t border-gray-800" />
        </nav>

    );
};

export default Navbar;