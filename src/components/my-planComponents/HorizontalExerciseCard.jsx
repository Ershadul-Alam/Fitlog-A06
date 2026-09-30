import React from 'react';
import Image from 'next/image';
import { Clock, Flame, Star, Check, X } from 'lucide-react';

export default function HorizontalExerciseCard() {
    const exerciseData = {
        title: "RUSSIAN TWIST",
        subtitle: "Medicine Ball",
        image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
        duration: "8 min",
        calories: "70 kcal",
        rating: "4.1"
    };

    return (
        <div className="text-white p-4  flex items-center justify-center font-sans">

            
            {/* 
        Main Card Container
        Uses the exact requested dark background (#16171b) and lighter border.
      */}
            <div className="w-full max-w-5xl bg-[#16171b] border border-[#27282e] rounded-2xl p-3 pr-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-xl transition-all hover:border-[#383a42]">

                
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full md:w-auto md:flex-1">

                    
                    {/* Thumbnail Image using Next.js Image */}
                    <div className="shrink-0 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                        <Image
                            src={exerciseData.image}
                            alt={exerciseData.title}
                            width={120}
                            height={64}
                            className="object-cover w-[120px] h-[64px]"
                        />
                    </div>

                    
                    {/* Text Information */}
                    <div className="flex flex-col text-center sm:text-left w-full">
                        <h3 className="uppercase font-black text-xl tracking-wider text-white leading-tight mb-0.5">
                            {exerciseData.title}
                        </h3>
                        <p className="text-gray-400 text-sm font-medium mb-2.5">
                            {exerciseData.subtitle}
                        </p>

                        {/* Stats Row */}
                        <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-5">
                            <div className="flex items-center gap-1.5">
                                <Clock size={16} className="text-[#d9f90f]" />
                                <span className="text-gray-300 text-sm font-medium">{exerciseData.duration}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Flame size={16} className="text-[#d9f90f]" />
                                <span className="text-gray-300 text-sm font-medium">{exerciseData.calories}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Star size={16} className="text-[#d9f90f]" />
                                <span className="text-gray-300 text-sm font-medium">{exerciseData.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* Right Section: Actions */}
                <div className="flex items-center justify-center gap-3 w-full md:w-auto mt-4 md:mt-0 shrink-0">

                    {/* Secondary Button */}
                    <button className="px-5 py-2.5 rounded-full border border-gray-600 bg-transparent text-gray-200 text-sm font-semibold hover:bg-[#27282e] hover:border-gray-400 transition-all whitespace-nowrap">
                        View Details
                    </button>

                    {/* Primary Action Button */}
                    <button className="px-5 py-2.5 rounded-full bg-[#d9f90f] hover:bg-[#c2e00d] text-black text-sm font-bold flex items-center gap-2 transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(217,249,15,0.15)]">
                        <Check size={18} strokeWidth={2.5} />
                        Mark as Done
                    </button>

                    {/* Close / Dismiss Icon */}
                    <button className="p-2 ml-1 text-gray-500 hover:text-gray-300 hover:bg-[#27282e] rounded-full transition-colors group hidden sm:block">
                        <X size={20} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
    );
}