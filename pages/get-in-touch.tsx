import React from 'react';
import dynamic from 'next/dynamic';
import { IoArrowForward } from 'react-icons/io5';

import Indicator from '../components/routeIndicator/Indicator';
import Head from 'next/head';

const Map = dynamic(() => import('../components/map/Map'), {
  ssr: false,
});

type Props = {};

const ContactPage = (props: Props) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const handleMutateForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const officeLocations: Array<{
    location: [number, number];
    name: string;
    mail: string;
    address: string;
    phone: string;
  }> = [
    {
      location: [-33.9286976, 18.411518715],
      name: '1892 Chenoweth Drive TN',
      mail: 'archone@mail.com',
      address: '1892 Chenoweth Drive TN',
      phone: '+1 (904) 987-1234',
    },
    {
      location: [-33.9323948, 18.490244],
      name: 'Office 2',
      mail: 'archono@mail.com',
      address: '3399 Wines Lane TX',
      phone: '832-123-4321',
    },
  ];
  const [mapFocus, setMapFocus] = React.useState<[number, number]>(
    officeLocations.at(1)?.location || [0, 0]
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <>
      <Head>
        <title>Arch | Contact</title>
      </Head>
      <Indicator name='Contact' />
      <section className='mt-10 sm:mt-4 sm:grid grid-cols-6 grid-rows-6 lg:grid-rows-3 max-h-[600px]'>
        <div className='sm:block hidden row-span-6 lg:row-span-3 w-full h-full row-start-1 lg:row-end-4  col-start-1 lg:col-end-4 lg:col-span-3 col-span-4'>
          <img
            className='object-cover  w-full h-full'
            src='/assets/contact/desktop/image-hero.jpg'
            alt=''
          />
        </div>
        <h3
          className='row-span-1 row-start-1 col-span-4 col-start-3 text-right hidden lg:block  text-[12rem] leading-none  text-slate-100 self-center '
          role='presentation'
        >
          Contact
        </h3>
        <div className='row-span-4 lg:row-span-2 h-full sm:py-6 lg:px-4 sm:px-10 row-start-1 sm:row-start-2 lg:row-end-4 col-span-6 sm:col-span-5 col-start-1 sm:col-start-2 lg:col-start-3 gap-2 self-center sm:outline-1 sm:outline sm:outline-slate-300 sm:bg-slate-50/90 sm:backdrop-blur-sm sm:shadow-xl flex items-center justify-center lg:grid grid-cols-4 grid-rows-1'>
          <div className='col-start-2 col-span-3 flex flex-col gap-4'>
            <hr className='w-1/2 h-[2px] bg-slate-300  mb-10 hidden lg:block' />
            <h2 className=' text-3xl sm:text-4xl md:text-5xl font-semibold'>
              Tell us about your project
            </h2>
            <p className='sm:text-xl md:text-2xl font-light leading-5'>
              We'd love to hear more about your project. Please, leave a message
              below or give us a call. We have two offices, one in Texas and one
              in Tennessee. If you find yourself nearby, come say hello!
            </p>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-2 md:grid-cols-8 gap-8 md:gap-12'>
        <h2 className='col-span-2  text-3xl sm:text-4xl md:text-5xl font-semibold'>
          Contact Details
        </h2>
        {officeLocations.map((office, i) => (
          <article
            key={`${i}-${office.name}`}
            className='pr-4 md:col-span-3 col-span-1 flex flex-col gap-4 font-light text-slate-400 md:text-lg'
          >
            <h3 className='text-xl  text-slate-600 font-semibold'>
              Main Office
            </h3>
            <div className='flex flex-col gap-4'>
              <p className='flex flex-wrap justify-between gap-1'>
                <span>Mail:</span>
                <span>{office.mail}</span>
              </p>
              <p className='flex flex-wrap justify-between gap-1'>
                <span>Address:</span>
                <span>{office.address}</span>
              </p>
              <p className='flex flex-wrap justify-between gap-1'>
                <span>Phone:</span>
                <span>{office.phone}</span>
              </p>
            </div>
            <button
              className='mt-2 p-0 font-semibold  flex self-start items-center gap-3 text-lg text-slate-900 hover:text-slate-700'
              onClick={() => setMapFocus(office.location)}
            >
              <span>View on map</span>
              <IoArrowForward />
            </button>
          </article>
        ))}
      </section>

      <section>
        <div className='h-[300px] sm:h-[400] xl:h-[500px] overflow-hidden w-full block p-4 border border-dashed border-slate-400'>
          <Map locations={officeLocations} focus={mapFocus} />
        </div>
      </section>

      <section className='grid grid-cols-2 md:grid-cols-8 gap-8 md:gap-12'>
        <h2 className='col-span-2  text-3xl sm:text-4xl md:text-5xl font-semibold'>
          Connect with us
        </h2>

        {formSubmitted ? (
          <article className='md:col-span-6 col-span-2 flex flex-col gap-2 font-light text-slate-400 md:text-lg p-4 border border-slate-200 bg-slate-50'>
            <h3 className='text-2xl  text-slate-600 font-semibold'>
              Thank you so much for reaching out!
            </h3>
            <p className='md:text-xl  text-slate-600'>
              We will get back to you as soon as we can for now you can check
              our other work to get an idea of what we are all about.
            </p>
          </article>
        ) : (
          <form
            className='md:col-span-6 col-span-2 flex flex-col gap-4 font-light text-slate-400 md:text-lg'
            onSubmit={handleFormSubmit}
          >
            <input
              value={formData.name}
              required
              onChange={handleMutateForm}
              type='text'
              id='name'
              placeholder='Your name'
              className='text-slate-800 border-b-2 border-slate-400 active:border-slate-800 focus:border-slate-700 focus:outline-0 transition-colors  p-2'
            />
            <input
              value={formData.email}
              required
              onChange={handleMutateForm}
              type='email'
              id='email'
              placeholder='Your email'
              className='text-slate-800 border-b-2 border-slate-400 active:border-slate-800 focus:border-slate-700 focus:outline-0 transition-colors  p-2'
            />
            <textarea
              value={formData.message}
              required
              onChange={handleMutateForm}
              id='message'
              rows={1}
              placeholder='Message'
              className='text-slate-800 border-b-2 border-slate-400 active:border-slate-800 focus:border-slate-700 focus:outline-0 transition-colors  p-2'
            ></textarea>

            <button
              type='submit'
              className='mt-2 py-4 px-4 bg-slate-900 hover:bg-slate-600 flex self-end items-center gap-3 text-lg text-slate-200 font-light '
            >
              <span>Submit</span>
              <IoArrowForward />
            </button>
          </form>
        )}
      </section>
    </>
  );
};

export default ContactPage;
