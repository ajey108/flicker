import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
      <div className="flex justify-spacearound items-center max-w-6xl mx-auto">
        <Link href='/' className='hidden lg:inline-flex'>
          <Image
            src='/flickerlogo.png'
            width={36}
            height={36}
            alt='flickerLogo'
          />
        </Link>
        <Link href='/' className='lg:hidden'>
          <Image
            src='/flickerlogo.png'
            width={96}
            height={96}
            alt='flickerLogo'
          />
        </Link>

        <form className="w-full max-w-md mx-4">
          <input 
            type="text" 
            placeholder='Search'
            className='bg-gray-50 border border-gray-200 text-sm w-full py-2 px-4 rounded'
          />
        </form>

        <button className='text-sm font-semibold text-green-500'>Log In</button>
      </div>
    </div>
  )
}

export default Header;
