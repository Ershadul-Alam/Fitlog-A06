"use client"
import { MyplanContext } from '@/app/context/MyplanContext';
import { X } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const HorizontalExerciseCardDismissIcon = ({today, plan}) => {

    const { setSaved, setTodaysPlan } = useContext(MyplanContext);

const handleDismiss = () => {
    if (today) {
        setTodaysPlan(current => current.filter(item => item.id !== plan.id));
        toast.success('Exercise removed from today\'s plan');
    } else if(!today){
        setSaved(current => current.filter(item => item.id !== plan.id));
        toast.success('Exercise removed from saved exercises');
    }
};

return (
    <button
        onClick={handleDismiss}
        aria-label={`Remove ${plan.name}`}
        className="mx-auto rounded-full p-1 text-gray-500 transition-colors group hover:bg-[#27282e] hover:text-gray-300 sm:mx-0 sm:ml-1 sm:p-2"
    >
        <X size={16} className="transition-transform group-hover:scale-110 sm:size-5" />
    </button>
);
};

export default HorizontalExerciseCardDismissIcon;