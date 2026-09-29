import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='mb-8'>
            <hr className="mt-18 mb-10 border-t border-gray-800" />
            <div className='flex justify-between container mx-auto max-w-272'>
            <Link href="/" className='flex items-center'>
                    <Image
                        src="/logo.png"
                        width={20}
                        height={20}
                        alt="Logo"
                    />
                    <p className='text-white ml-1'>FITLOG</p>
                </Link>
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;