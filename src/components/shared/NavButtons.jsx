'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavButtons = () => {


const pathname = usePathname();

    return (
        <div>
            {/* Workouts Link */}
                    <Link
                        href="/"
                        className={`px-4 py-1.5 rounded-full text-md font-medium transition-colors duration-200 ${pathname === "/"
                                ? "bg-[#1f2812] text-[#caff00]" // Active state styling
                                : "bg-transparent text-gray-400 hover:text-gray-300" // Inactive state styling
                            }`}
                    >
                        Workouts
                    </Link>

                    {/* My Plan Link */}
                    <Link
                        href="/my-plan"
                        className={`px-4 py-1.5 rounded-full text-md font-medium transition-colors duration-200 ${pathname === "/my-plan"
                                ? "bg-[#1f2812] text-[#caff00]"
                                : "bg-transparent text-[#8b929d] hover:text-gray-300"
                            }`}
                    >
                        My Plan
                    </Link>
        </div>
    );
};

export default NavButtons;