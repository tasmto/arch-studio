import Head from 'next/head';
import React from 'react';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';
import Indicator from '../components/routeIndicator/Indicator';

type Props = {};

const AboutPage = (props: Props) => {
  type TeamMemberType = {
    name: string;
    title: string;
    image: string;
    twitter?: string;
    linkedin?: string;
  };

  const teamMembers: Array<TeamMemberType> = [
    {
      name: 'Jake Richards',
      title: 'Chief Architect',
      image: '/assets/about/desktop/avatar-jake.jpg',
    },
    {
      name: 'Thompson Smith',
      title: 'Head of Finance',
      image: '/assets/about/desktop/avatar-thompson.jpg',
    },
    {
      name: 'Jackson Rourke',
      title: 'Lead Designer',
      image: '/assets/about/desktop/avatar-jackson.jpg',
    },
    {
      name: 'Maria Simpson',
      title: 'Senior Architect',
      image: '/assets/about/desktop/avatar-maria.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Arch | About</title>
      </Head>
      <Indicator name='About' />
      <section className='mt-10 sm:mt-4 sm:grid grid-cols-6 grid-rows-6 lg:grid-rows-3 max-h-[600px]'>
        <div className='sm:block hidden row-span-6 lg:row-span-3 w-full h-full row-start-1 lg:row-end-4  col-start-1 lg:col-end-4 lg:col-span-3 col-span-4'>
          <img
            className='object-cover  w-full h-full'
            src='/assets/about/desktop/image-hero.jpg'
            alt=''
          />
        </div>
        <h3
          className='row-span-1 row-start-1 col-span-4 col-start-3 text-right hidden lg:block  text-[12rem] leading-none  text-slate-100 self-center '
          role='presentation'
        >
          About
        </h3>
        <div className='row-span-4 lg:row-span-2 h-full sm:py-6 lg:px-4 sm:px-10 row-start-1 sm:row-start-2 lg:row-end-4 col-span-6 sm:col-span-5 col-start-1 sm:col-start-2 lg:col-start-3 gap-2 self-center sm:outline-1 sm:outline sm:outline-slate-300 sm:bg-slate-50/90 sm:backdrop-blur-sm sm:shadow-xl flex items-center justify-center lg:grid grid-cols-4 grid-rows-1'>
          <div className='col-start-2 col-span-3 flex flex-col gap-4'>
            <hr className='w-1/2 h-[2px] bg-slate-200  mb-10 hidden lg:block' />
            <h2 className=' text-3xl sm:text-4xl md:text-5xl font-semibold'>
              Your team of professionals
            </h2>
            <p className='sm:text-xl font-light leading-5'>
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
        </div>
      </section>
      <section className='grid lg:grid-cols-2  gap-y-10 gap-8'>
        <article className='flex flex-col gap-6 md:gap-10'>
          <hr className='w-1/2 h-[2px] bg-slate-200 ' />
          <h2 className='text-3xl sm:text-4xl md:text-6xl  font-semibold'>
            Our Heritage
          </h2>
          <p className='sm:text-xl font-light leading-5'>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
            <br />
            <br />
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
            <br />
            <br /> Our small team of world-class professionals provides input on
            every project.
          </p>
        </article>
        <div className='h-full col-span-1 hidden lg:block'>
          <img
            className='object-cover h-full'
            src='/assets/about/desktop/image-heritage.jpg'
            alt=''
          />
        </div>
      </section>
      <section className='grid lg:grid-cols-3 gap-6'>
        <h2 className='col-span-1 text-3xl sm:text-4xl md:text-6xl  font-semibold'>
          The Leaders
        </h2>
        <div className='col-span-2 grid grid-cols-2 gap-6 md:gap-12'>
          {teamMembers.map((member, i) => (
            <article key={i} className='flex flex-col gap-0 font-light'>
              <img
                src={member.image}
                alt={`A picture of ${member.name}`}
                className='mb-4'
              />
              <h3 className='text-xl lg:text-2xl'>{member.name}</h3>
              <p className='lg:text-xl'>{member.title}</p>
              <ul className='flex gap-2 mt-2'>
                <li>
                  <a
                    href={
                      member.linkedin || 'https://www.linkedin.com/in/tasmto/'
                    }
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IoLogoLinkedin className='h-8 w-8' />
                  </a>
                </li>
                <li>
                  <a
                    href={member.twitter || 'https://twitter.com/tasmto'}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IoLogoTwitter className='h-8 w-8' />
                  </a>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
