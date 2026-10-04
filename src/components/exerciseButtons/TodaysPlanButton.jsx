"use client";
import { MyplanContext } from '@/app/context/MyplanContext';
import { CalendarPlus } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodaysPlanButton = ({exerciseData}) => {

    const {todaysPlan, setTodaysPlan} = useContext(MyplanContext)
    const handleTodaysPlanButton = () => {
        const isAlreadyAdded = todaysPlan.some((item) => item.id === exerciseData.id);

        if (isAlreadyAdded) {
            toast.info('Already added to daily plan');
            return;
        }

        if (todaysPlan.length >= 5) {
            toast.warning('Today\'s plan is full. Finish or remove a lift first.');
            return;
        }

        setTodaysPlan((current) => [...current, exerciseData]);
        toast.success('Exercise added to daily plan');
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
                <span>Add to today&apos;s plan</span>
            </button>
        </div>
    );
};

export default TodaysPlanButton;