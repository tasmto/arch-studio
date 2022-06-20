import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

type Props = {};

const PortfolioCollectionPage = (props: Props) => {
  type PortfolioType = {
    title: string;
    image: string;
    link?: string;
    date: string;
  };

  const portfolioContent: Array<PortfolioType> = [
    {
      title: 'Seraph Station',
      image: '/assets/portfolio/desktop/image-seraph.jpg',
      date: 'September 2019',
    },
    {
      title: 'Eebox Building',
      image: '/assets/portfolio/desktop/image-eebox.jpg',
      date: 'August 2017',
    },
    {
      title: 'Federal II Tower',
      image: '/assets/portfolio/desktop/image-federal.jpg',
      date: 'March 2017',
    },
    {
      title: 'Project Del Sol',
      image: '/assets/portfolio/desktop/image-del-sol.jpg',
      date: 'January 2015',
    },
    {
      title: 'Le Prototype',
      image: '/assets/portfolio/desktop/image-prototype.jpg',
      date: 'October 2015',
    },
    {
      title: '228B Tower',
      image: '/assets/portfolio/desktop/image-228b.jpg',
      date: 'April 2015',
    },
    {
      title: 'Grand Edelweiss Hotel',
      image: '/assets/portfolio/desktop/image-edelweiss.jpg',
      date: 'December 2013',
    },
    {
      title: 'Netcry Tower',
      image: '/assets/portfolio/desktop/image-netcry.jpg',
      date: 'August 2012',
    },
    {
      title: 'Hypers',
      image: '/assets/portfolio/desktop/image-hypers.jpg',
      date: 'January 2012',
    },
    {
      title: 'SXIV Tower',
      image: '/assets/portfolio/desktop/image-sxiv.jpg',
      date: 'March 2011',
    },
    {
      title: 'Trinity Bank Tower',
      image: '/assets/portfolio/desktop/image-trinity.jpg',
      date: 'September 2010',
    },
    {
      title: 'Project Paramour',
      image: '/assets/portfolio/desktop/image-paramour.jpg',
      date: 'February 2008',
    },
  ];
  return (
    <div className=' flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 '>
      {portfolioContent.map((item, i) => (
        <Link
          to={item?.link || ''}
          className='flex-1 w-full  relative overflow-hidden bg-slate-800 hover:bg-slate-600 text-white py-10 px-4 lg:px-10 h-[300px] lg:h-[500px] xl:h-[600px] flex flex-col items-start justify-end '
        >
          <img
            src={item.image}
            className='w-full h-full z-[2] r absolute top-0 left-0 scale-[1.05] translate-1/2 object-cover  opacity-50'
          />
          <div className='flex lg:flex-col justify-between items-center lg:items-start lg:justify-start w-full relative z-10 gap-2'>
            <h4 className='text-2xl sm:text-4xl'>{item.title}</h4>
            <p className='text-xl md:text-4x font-light flex items-center gap-1 flex-wrap'>
              <span>{item.date}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioCollectionPage;
