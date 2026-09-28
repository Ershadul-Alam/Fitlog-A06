import React from 'react';
import Image from 'next/image';
import { Clock, Flame, Star } from 'lucide-react';
import Link from 'next/link';

const LibraryCards = ({cardData}) => {

    console.log(cardData, `from libraryCard`);

    const exerciseData = {
        id: 1,
        name: "Barbell Bench Press",
        image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
        muscleGroups: ["Chest", "Arms"],
        equipment: "Barbell, Bench",
        difficulty: "Intermediate",
        duration: 25,
        caloriesBurned: 180,
        sets: 4,
        reps: "6-8",
        rating: 4.8,
        description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
        instructions: [
            "Lie on the bench with eyes under the bar and feet planted.",
            "Unrack with locked elbows and lower the bar to mid-chest.",
            "Press up in a slight arc until elbows lock without bouncing.",
            "Keep shoulder blades pinched and a natural arch in the back."
        ]
    };

    return (
        <Link href={`/exercise/${cardData.id}`}>
        <div className="font-sans">
            <div className="w-full max-w-[440px] bg-[#1a1a1c] rounded-[28px] overflow-hidden shadow-2xl border border-[#2a2a2c]">
                {/* Card Image */}
                <div className="relative w-full h-[260px]">
                    <Image
                        src={cardData.image}
                        alt={cardData.name}
                        fill
                        sizes="(max-width: 440px) 100vw, 440px"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Card Content Container */}
                <div className="p-6">

                    { }
                    {/* Muscle Group Tags */}
                    {/* <div className="flex flex-wrap gap-3 mb-4">
                        {cardData.muscleGroups.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
                            >
                                {group}
                            </span>
                        ))}
                    </div> */}

                    {/* Title & Subtitle */}
                    <h2 className="text-white text-3xl font-black uppercase tracking-wide mt-2">
                        {cardData.name}
                    </h2>
                    <p className="text-gray-400 text-[17px] mt-1.5">
                        {cardData.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-6 border-t border-[#2a2a2c]"></div>

                    { }
                    {/* Footer Stats */}
                    <div className="flex items-center space-x-7 text-gray-300 font-medium">

                        {/* Duration */}
                        <div className="flex items-center gap-2">
                            <Clock size={20} className="text-gray-400" />
                            <span>{cardData.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-2">
                            <Flame size={20} className="text-gray-400 fill-current" />
                            <span>{cardData.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <Star size={20} className="text-gray-400" />
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