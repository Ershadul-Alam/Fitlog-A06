import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-end bg-mist-900 p-10 rounded-2xl'>
            <div>
                <p className='text-[#C2F800] font-bold text-xs mb-6'>WORKOUT LIBRARY</p>
                <p className='font-bold text-5xl mb-6'>TRAIN WITH INTENT. LOG EVERY SET.</p>
                <p className='text-[#9CA3AF] font-light text-sm max-w-105 mb-6'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.</p>
                <button className="btn btn-success bg-[#C2F800] text-[#000000] border-0 shadow-none font-semibold">BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image
                    src="/banner.png"
                    width={334}
                    height={334}
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default Banner;