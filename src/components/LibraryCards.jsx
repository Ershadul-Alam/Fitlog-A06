import React from 'react';
import Image from 'next/image';
import { Clock, Flame, Star } from 'lucide-react';
import Link from 'next/link';

const LibraryCards = ({cardData}) => {

    return (
        <Link href={`/exercise/${cardData.id}`}>
        <div className="font-sans ">
            <div className="mx-auto mb-3 h-full min-h-[360px] w-full max-w-[340px] overflow-hidden rounded-[28px] border border-[#2a2a2c] bg-[#1a1a1c] shadow-2xl">
                {/* Card Image */}
                <div className="relative h-[180px] w-full sm:h-[200px] md:h-[220px]">
                    <Image
                        src={cardData.image}
                        alt={cardData.name}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 340px"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Card Content Container */}
                <div className="p-4 sm:p-5">

                    
                    {/* Muscle Group Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                        {cardData.muscleGroups.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="text-white text-xl font-black uppercase tracking-wide mt-2">
                        {cardData.name}
                    </h2>
                    <p className="text-gray-400 text-sm font-light mt-1">
                        {cardData.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-4 border-t border-[#2a2a2c]"></div>

                    { }
                    {/* Footer Stats */}
                    <div className="flex items-center justify-between gap-2 text-xs font-medium text-gray-300 sm:text-sm">

                        {/* Duration */}
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="shrink-0 text-gray-400 sm:size-5" />
                            <span>{cardData.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-2">
                            <Flame size={16} className="shrink-0 fill-current text-gray-400 sm:size-5" />
                            <span>{cardData.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <Star size={16} className="shrink-0 text-gray-400 sm:size-5" />
                            <span>{cardData.rating}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default LibraryCards;