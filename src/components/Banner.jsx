import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BannerButton from './BannerButton';

const Banner = () => {
    return (
        <div className='mt-6 flex flex-col items-center gap-6 rounded-2xl bg-mist-900 p-5 sm:p-8 md:mt-13 md:flex-row md:justify-around md:p-10'>
            <div className='w-full md:max-w-[48%]'>
                <p className='mb-4 text-xs font-bold text-[#C2F800] sm:mb-6'>WORKOUT LIBRARY</p>
                <p className='mb-4 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl'>TRAIN WITH INTENT. LOG EVERY SET.</p>
                <p className='text-[#9CA3AF] font-light text-sm max-w-105 mb-6'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <BannerButton/>
            </div>
            <div className='w-full max-w-[500px] md:w-1/2'>
                <Image
                    src="/banner.png"
                    width={500}
                    height={500}
                    alt="Banner"
                    className='h-auto w-full'
                />
            </div>
        </div>
    );
};

export default Banner;