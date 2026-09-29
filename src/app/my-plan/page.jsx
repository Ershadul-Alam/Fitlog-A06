"use client";
import React, { useContext } from 'react';
import { MyplanContext } from '../context/MyplanContext';

const MyPlan = () => {

    const {todaysPlan} = useContext(MyplanContext);
    console.log(todaysPlan, "todaysPlan");

    return (
        <div className='container mx-auto max-w-272'>
            <h3>MY PLAN</h3>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <div className='grid grid-cols-3 p-4 items-center bg-[#13161D] font-bold text-[36px] py-6 rounded-2xl'>
                <div>
                    <p className='font-light text-sm'>Exercises</p>
                    <div>{todaysPlan.length}</div>
                </div>
                <div>
                    <p className='font-light text-sm'>Minutes</p>
                    <div>23</div>
                </div>
                <div>
                    <p className='font-light text-sm'>Calories</p>
                    <div>190</div>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;