'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className='mb-16 flex w-full items-center justify-between pt-3'>
      <Link href='/' className='flex items-center justify-center gap-2'>
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia Logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='font-satoshi text-lg tracking-wide text-black max-sm:hidden'>
          Promptopia
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden sm:flex'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link
              href='/create-prompt'
              className='flex items-center justify-center rounded-full border border-black bg-black px-5 py-1.5 text-center font-inter text-sm text-white transition-all hover:bg-white hover:text-black'
            >
              Create Post
            </Link>

            <button
              type='button'
              onClick={() => signOut()}
              className='flex items-start justify-center rounded-full border border-black bg-transparent px-5 py-1.5 text-center font-inter text-sm text-black transition-all hover:bg-black hover:text-white'
            >
              Sign Out
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
