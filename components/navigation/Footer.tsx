import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  const menuItems = [
    { link: '/our-work', text: 'Portfolio' },
    { link: '/get-in-touch', text: 'Contact' },
    { link: '/about-us', text: 'About Us' },
  ];
  return (
    <footer className='flex flex-col justify-items-stretch bg-slate-200 p-2 sm:p-0 sm:bg-transparent sm:grid grid-cols-4 gap-1 sm:gap-4'>
      <nav className=' sm:row-span-full  col-span-4 sm:col-start-1 sm:col-span-7 self-center flex flex-col gap-y-4 py-4 sm:py-0 sm:flex-row justify-center sm:items-center sm:justify-start sm:items-[stretch] bg-slate-200'>
        <h3 className='bg-slate-900 p-3 py-4 sm:h-[100px] sm:p-3 flex items-center self-center'>
          <img src='\assets\logo-white.svg' alt='' />
        </h3>
        <ul className='flex items-center'>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link href={item.link}>
                <a
                  className={`p-3 py-1 block md:px-5 font-light text-slate-500 hover:text-slate-700 text-sm lg:text-xl`}
                >
                  {item.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href='/our-work'>
        <a className='sm:row-span-full col-span-4 sm:col-span-6 sm:col-end-11 self-center py-3 px-4 bg-slate-900 hover:bg-slate-600 flex items-center gap-3 text-lg text-slate-200 font-light sm:px-6'>
          <span>See our portfolio</span>
          <IoArrowForward />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
