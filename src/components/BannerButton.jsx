'use client';
import React from 'react';

const BannerButton = () => {

    const scrollToSection = () => {
        const element = document.getElementById('library-section');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
            <button 
            onClick={scrollToSection}
            className="btn btn-success bg-[#C2F800] text-[#000000] border-0 shadow-none 
            font-semibold">BROWSE WORKOUTS
            </button>
    );
};

export default BannerButton;