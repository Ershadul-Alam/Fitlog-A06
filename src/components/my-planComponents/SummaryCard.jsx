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
        <div className='grid grid-cols-3'>
                <div>
                    <p className='font-light text-sm'>Exercises</p>
                    <div>{summaryData.length}</div>
                </div>
                <div>
                    <p className='font-light text-sm'>Minutes</p>
                    <div>
                        {totalDuration}
                    </div>
                </div>
                <div>
                    <p className='font-light text-sm'>Calories</p>
                    <div>{totalCalories}</div>
                </div>
                </div>
    );
};

export default SummaryCard;