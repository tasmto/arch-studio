import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='py-3 md:py-5 lg:py-8 lg:pb-12 flex gap-10 lg:gap-16 items-center relative'>
      <Link to='/' className=''>
        <h1 className='flex-col'>
          <img src='/assets/logo.svg' />
        </h1>
      </Link>
      <nav>
        <ul
          className='gap-3 sm:gap-0 flex-col sm:flex-row px-6 sm:px-0 py-4 sm:py-0 absolute top-full left-0 min-w-[70vw]  sm:static flex bg-slate-800 sm:bg-transparent'
          role='navigation'
        >
          <li>
            <Link
              className='p-3 md:px-5 font-light text-slate-400 hover:text-slate-500 text-md lg:text-xl'
              to='/our-work'
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className='p-3 md:px-5 font-light text-slate-400 hover:text-slate-500 text-md lg:text-xl'
              to='/about-us'
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className='p-3 md:px-5 font-light text-slate-400 hover:text-slate-500 text-md lg:text-xl'
              to='/get-in-touch'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
