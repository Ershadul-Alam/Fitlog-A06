import Banner from '@/components/Banner';
import Library from '@/components/Library';
import React from 'react';

const page = () => {
  return (
    <div className='container mx-auto max-w-272 px-4 sm:px-6'>
      <Banner/>
      <Library/>
    </div>
  );
};

export default page;