import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='mb-8'>
            <hr className="mt-18 mb-10 border-t border-gray-800" />
            <div className='container mx-auto flex max-w-272 items-center justify-between gap-3 px-4 sm:px-6'>
            <Link href="/" className='flex items-center'>
                    <Image
                        src="/logo.png"
                        width={20}
                        height={20}
                        alt="Logo"
                    />
                    <p className='ml-1 text-sm font-bold text-white sm:text-lg'>FITLOG</p>
                </Link>
                <p className='max-w-[72%] text-right text-[10px] font-light leading-tight text-gray-500 sm:max-w-none sm:text-sm'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;