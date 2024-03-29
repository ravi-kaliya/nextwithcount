'use client';
import YourComponent from '@/components/YourComponents';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-5'>
      <div className='grid place-items-center gap-3 w-1/2 h-20 rounded-md bg-gray-700 '>
        <YourComponent />
      </div>
      <div className='flex flex-col gap-3'>
        <input
          type='number'
          placeholder='Enter number'
          className='bg-white rounded-md p-4'
        />
        <input
          type='submit'
          value='Submit'
          className='bg-white rounded-md text-black p-3 cursor-pointer'
        />
      </div>
      <div className='grid place-items-center gap-3 w-20 h-20 rounded-md bg-gray-500 '>
        {count}
      </div>
    </main>
  );
}
