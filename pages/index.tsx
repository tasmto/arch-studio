import React from 'react';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';
import AboutImage from '../public/assets/home/desktop/image-welcome.jpg';
import SmallTeamBigIDeasImage from '../public/assets/home/desktop/image-small-team.jpg';
// @ts-ignore
import Indicator from '../components/routeIndicator/Indicator';

type Props = {};

const Home: React.FC = (props: Props) => {
  type SliderContent = {
    title: string;
    text: string;
    image: string;
    link?: string;
    linkText?: string;
  };

  const sliderContent: Array<SliderContent> = [
    {
      title: 'Project Paramour',
      text: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
      image: '/assets/home/desktop/image-hero-paramour.jpg',
    },
    {
      title: 'Seraph Station',
      text: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
      image: '/assets/home/desktop/image-hero-seraph.jpg',
    },
    {
      title: 'Federal II Tower',
      text: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
      image: '/assets/home/desktop/image-hero-federal.jpg',
    },
    {
      title: 'Trinity Bank Tower',
      text: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
      image: '/assets/home/desktop/image-hero-trinity.jpg',
    },
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

  type FeaturedContent = {
    title: string;
    image: string;
    link?: string;
  };

  const featuredContent: Array<FeaturedContent> = [
    {
      title: 'Project Del Sol',
      image: '/assets/portfolio/desktop/image-del-sol.jpg',
    },
    {
      title: '228B Tower',
      image: '/assets/portfolio/desktop/image-228b.jpg',
    },
    {
      title: 'Le Prototype',
      image: '/assets/portfolio/desktop/image-prototype.jpg',
    },
  ];

  const toggleActiveSlide = (e: any) =>
    setActiveSlide(Number(e.currentTarget.id));

  return (
    <>
      <Indicator name='Homepage' />
      <section>
        <div
          className={`py-14 lg:h-[100vh] lg:max-h-[600px] sm:py-20 px-[10vw] sm:px-36 bg-gray-900 text-white bg-cover flex items-center after overflow-hidden relative`}
        >
          <Image
            src={sliderContent.at(activeSlide)?.image || ''}
            className='w-full h-full  absolute top-0 left-0 scale-[1.25] translate-1/2 object-cover blur-[2px] opacity-40 pointer-events-none'
            layout='fill'
            priority
            alt=''
          />
          <article className='relative z-10 max-w-xl flex flex-col justify-start gap-2 sm:gap-4'>
            <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold'>
              {sliderContent.at(activeSlide)?.title || ''}
            </h2>
            <p className='sm:text-xl font-light'>
              {sliderContent.at(activeSlide)?.text || ''}
            </p>
            <Link
              className='z-[10]'
              href={sliderContent.at(activeSlide)?.link || '/our-work'}
            >
              <a className=' mt-6 py-3 px-4 bg-slate-900 hover:bg-slate-600 flex self-start items-center gap-3 text-lg text-slate-200 font-light sm:px-6'>
                <span>
                  {sliderContent.at(activeSlide)?.link
                    ? 'See portfolio piece'
                    : 'See our portfolio'}
                </span>
                <IoArrowForward />
              </a>
            </Link>
          </article>
        </div>
        <ul className='z-[3] absolute flex gap-0 translate-y-[-30%]  lg:translate-y-[-90%] xl:translate-x-[-80px]'>
          {sliderContent.map((_, i) => (
            <li
              key={i}
              role='button'
              id={`${i}`}
              onClick={toggleActiveSlide}
              className={`h-20 w-20 py-7 px-8 bg-slate-200 hover:bg-slate-300 text-xl transition-colors duration-300 font-light tracking-widest  ${
                i === activeSlide &&
                'bg-slate-800 text-white hover:bg-slate-800'
              }`}
            >
              {`0${i + 1}`}
            </li>
          ))}
        </ul>
      </section>

      <section className='flex relative lg:grid justify-center lg:grid-cols-5 gap-6 lg:gap-14 lg:grid-rows-1'>
        <article className='mt-10 xl:mt-0 flex flex-col gap-4 col-start-2 col-span-3 row-span-1 max-w-[350px] sm:max-w-none sm:w-1/3 md:w-3/6 lg:w-full'>
          <h3
            className=' hidden lg:block absolute z-[-1] leading-[0] text-[14rem] top-[15%] font-bold left-0 text-slate-100 xl:translate-x-[-80px]'
            role='presentation'
          >
            Welcome
          </h3>
          <h2 className='text-4xl md:text-6xl  font-semibold '>
            Welcome to Arch Studio
          </h2>
          <p className='font-light '>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results. <br />
            <br />
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight. <br />
            <br /> We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </article>
        <div className='col-start-5 overflow-hidden hidden sm:block sm:w-1/3 lg:w-full lg:max-h-fit col-span-2  w-full row-span-1 self-center shadow-sm'>
          <Image
            className='object-cover h-full sm:max-h-[450px] md:max-h-[350px] lg:max-h-[400px] w-full m-0'
            src={AboutImage}
            placeholder='blur'
            alt=''
          />
        </div>
      </section>

      <section>
        <div className='py-14 lg:h-[70vh] lg:max-h-[450px] sm:py-20 px-[10vw] sm:px-36 bg-gray-900 text-white bg-cover flex items-center  after overflow-hidden relative'>
          <Image
            src={SmallTeamBigIDeasImage}
            className='w-100 h-100 z-[2]  absolute top-0 left-0 scale-[1.25] translate-1/2 object-cover blur-[2px] opacity-40'
            layout='fill'
            placeholder='blur'
            alt=''
          />
          <article className='relative z-10 max-w-lg flex flex-col justify-start gap-2 sm:gap-4'>
            <h2 className='text-4xl md:text-6xl lg:text-7xl font-semibold'>
              Small team, big ideas
            </h2>

            <Link href='/our-work'>
              <a className='mt-6 py-3 px-4 bg-slate-900 hover:bg-slate-600 flex self-start items-center gap-3 text-lg text-slate-200 font-light sm:px-6'>
                <span>See our portfolio</span>
                <IoArrowForward />
              </a>
            </Link>
          </article>
        </div>
      </section>

      <section className='flex gap-6 flex-col'>
        <div className='flex justify-between gap-3 items-center flex-wrap'>
          <h2 className='text-4xl md:text-6xl lg:text-8xl font-semibold'>
            Featured
          </h2>
          <Link href='/our-work'>
            <a className='py-3 px-4 bg-slate-900 hover:bg-slate-600 flex self-center items-center gap-3 text-lg text-slate-200 font-light sm:px-6 my-auto'>
              <span>See all</span>
              <IoArrowForward />
            </a>
          </Link>
        </div>
        <div className='flex flex-col gap-4 lg:flex-row overflow-hidden'>
          {featuredContent.map((item, i) => (
            <Link key={i} href={item?.link || '/our-work'}>
              <a className='flex-1 relative overflow-hidden bg-slate-800 hover:bg-slate-600 text-white py-10 px-4 lg:px-10 h-[300px] lg:h-[500px] flex flex-col items-start justify-end'>
                <img
                  alt=''
                  src={item.image}
                  className='w-full h-full z-[2] r absolute top-0 left-0 scale-[1.05] translate-1/2 object-cover  opacity-50'
                />
                <div className='flex lg:flex-col justify-between items-center lg:items-start lg:justify-start w-full  z-10 gap-1'>
                  <h6
                    role='presentation'
                    className='absolute font-bold text-[14rem] hidden lg:block text-slate-200/30 top-1/2 right-0 z-10  translate-y-[-50%] pointer-events-none'
                  >
                    0{i + 1}
                  </h6>
                  <h4 className='text-2xl sm:text-4xl'>{item.title}</h4>
                  <p className='text-xl md:text-4x font-light flex items-center gap-1 flex-wrap'>
                    {item.link ? 'View project' : 'View all projects'}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
