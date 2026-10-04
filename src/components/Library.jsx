import React from 'react';
import LibraryCards from './LibraryCards';

const Library = async() => {

    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return (
        <div className='mt-16 sm:mt-20 md:mt-24' id="library-section">
            <p className='font-bold text-2xl'>THE LIBRARY</p>
            <p className='mt-1 mb-6 text-gray-500 font-medium'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {data.map(cardData => <LibraryCards key={cardData.id} cardData={cardData} />)}
            </div>
        </div>
    );
};

export default Library;