import React, { useState } from 'react';
import { Link, useLocation, matchRoutes } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

type Props = {};

const Navbar = (props: Props) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { link: '/our-work', text: 'Portfolio' },
    { link: '/about-us', text: 'About Us' },
    { link: '/get-in-touch', text: 'Contact' },
  ];

  const toggleMenu = (): void => setMenuOpen((curState) => !curState);

  return (
    <header className='z-100 py-3 md:py-5 lg:py-8 xl:py-12 flex gap-8  items-center justify-between sm:justify-start relative md:overflow-hidden'>
      <Link to='/' className=''>
        <h1 className='flex-col'>
          <img src='/assets/logo.svg' className='max-w-[none]' />
        </h1>
      </Link>
      <nav>
        <ul
          className={`gap-1 sm:gap-0 flex-col z-30 sm:flex-row px-4 pl-6 sm:px-0 py-2 sm:py-0 fixed top-[15%] right-0 min-w-[70vw]  sm:static flex bg-slate-300 sm:bg-transparent scale-x-0 origin-right duration-500   ${
            menuOpen && 'scale-x-100 block'
          } transition-transform sm:scale-x-100 sm:flex`}
          role='navigation'
        >
          <li
            role='button'
            className='absolute left-1 top-4 border-r-2 border-r-slate-400 border-0 h-100'
          >
            <button
              onClick={toggleMenu}
              className='sm:hidden flex w-100 ml-[auto] pr-1 gap-1 justify-end items-center self-end text-slate-400 hover:text-slate-500 text-xs font-light tracking-widest uppercase'
            >
              <span style={{ writingMode: 'vertical-lr' }}>Close Menu</span>
            </button>
          </li>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                className={`p-3 py-1 block md:px-5 font-light text-slate-700 tracking-wider hover:text-slate-600 hover:bg-slate-400 opacity-0 translate-x-5 transition-all duration-[${
                  i * 2 + 1000
                }00] ${
                  menuOpen && `opacity-100 translate-x-0 `
                } sm:translate-x-0 sm:opacity-100 sm:hover:bg-transparent sm:text-slate-500 sm:hover:text-slate-700 text-sm lg:text-xl ${
                  location.pathname === item.link && ' font-bold'
                }`}
                to={item.link}
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        className='sm:hidden flex gap-1 items-center text-slate-800'
      >
        {menuOpen ? (
          <>
            <IoClose className='h-6 w-6  m-0' />
            <span className='text-xs ml-[-4px]'>Close</span>
          </>
        ) : (
          <>
            <IoMenu className='h-6 w-6  m-0' />
            <span className='text-xs '>Menu</span>
          </>
        )}
      </button>
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className='fixed w-screen h-screen z-20 top-0 left-0 bg-slate-900/80 backdrop-blur-sm sm:hidden cursor-pointer'
        ></div>
      )}
    </header>
  );
};

export default Navbar;
