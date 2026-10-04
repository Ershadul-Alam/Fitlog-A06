"use client";
import { MyplanContext } from '@/app/context/MyplanContext';
import React, { useContext } from 'react';

const SummaryCard = () => {

    const { saved, todaysPlan, active,} = useContext(MyplanContext);
        const summaryData = active === "today" ? todaysPlan : saved;

        const totalDuration = summaryData.reduce((acc,cur)=>{
            return acc + cur.duration;
        },0);

        const totalCalories = summaryData.reduce((acc,cur)=>{
            return acc + cur.caloriesBurned;
        },0);

    return (
        <div className='grid grid-cols-3 gap-2'>
                <div>
                    <p className='text-xs font-light sm:text-sm'>Exercises</p>
                    <div className='text-2xl text-[#CCFF00] sm:text-4xl'>{summaryData.length}</div>
                </div>
                <div>
                    <p className='text-xs font-light sm:text-sm'>Minutes</p>
                    <div className='text-2xl sm:text-4xl'>
                        {totalDuration}
                    </div>
                </div>
                <div>
                    <p className='text-xs font-light sm:text-sm'>Calories</p>
                    <div className='text-2xl sm:text-4xl'>{totalCalories}</div>
                </div>
                </div>
    );
};

export default SummaryCard;