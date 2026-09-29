import React from 'react';
import LibraryCards from './LibraryCards';

const Library = async() => {

    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return (
        <div className='mt-12'>
            <p>THE LIBRARY</p>
            <p>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-3 container mx-auto gap-2'>
            {data.map(cardData => <LibraryCards key={cardData.id} cardData={cardData} />)}
            </div>
        </div>
    );
};

export default Library;