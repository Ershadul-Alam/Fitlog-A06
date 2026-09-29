"use client";
import { MyplanContext } from '@/app/context/MyplanContext';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';

const SavedButton = ({exerciseData}) => {

    const { saved, setSaved } = useContext(MyplanContext)
    const handleSavedButton = () => {
        setSaved([...saved, exerciseData]);
        console.log(saved, "saved");
    };

    return (
        <div>
            <button 
            onClick={()=>handleSavedButton()}
            className="bg-[#1a1a1c] border border-gray-700 hover:bg-gray-800 transition-colors text-gray-200 text-sm font-semibold rounded-lg px-6 py-3 flex items-center justify-center gap-2 flex-1 sm:flex-none">
                <Bookmark size={18} className="text-gray-400" />
                <span>Save for later</span>
            </button>
        </div>
    );
};

export default SavedButton;