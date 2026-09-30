"use client";
import { MyplanContext } from '@/app/context/MyplanContext';
import { CalendarPlus } from 'lucide-react';
import React, { useContext } from 'react';

const TodaysPlanButton = ({exerciseData}) => {

    const {todaysPlan, setTodaysPlan} = useContext(MyplanContext)
    const handleTodaysPlanButton = () => {
        {todaysPlan.includes(exerciseData) ? alert("Already Added") :
        setTodaysPlan([...todaysPlan, exerciseData]);
        }
    };

    return (
        <div>
            <button 
            onClick={()=> handleTodaysPlanButton()}
            className="bg-[#C7F22A] hover:bg-[#b5dc26] transition-colors
                            text-black font-semibold text-sm rounded-lg px-6 py-3 
                            flex items-center justify-center gap-2 flex-1 sm:flex-none"
                            >
                <CalendarPlus size={18} />
                <span>Add to today's plan</span>
            </button>
        </div>
    );
};

export default TodaysPlanButton;