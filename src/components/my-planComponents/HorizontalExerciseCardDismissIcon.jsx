"use client"
import { MyplanContext } from '@/app/context/MyplanContext';
import { X } from 'lucide-react';
import React, { useContext } from 'react';

const HorizontalExerciseCardDismissIcon = ({today, plan}) => {

    const { setSaved, setTodaysPlan } = useContext(MyplanContext);

const handleDismiss = () => {
    if (today) {
        setTodaysPlan(current => current.filter(item => item !== plan));
    } else if(!today){
        setSaved(current => current.filter(item => item !== plan));
    }
};

return (
    <button
        onClick={handleDismiss}
        className="p-2 ml-1 text-gray-500 hover:text-gray-300 hover:bg-[#27282e] rounded-full transition-colors group hidden sm:block"
    >
        <X size={20} className="group-hover:scale-110 transition-transform" />
    </button>
);
};

export default HorizontalExerciseCardDismissIcon;