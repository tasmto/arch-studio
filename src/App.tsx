import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './features/navigation/Footer';
import Navbar from './features/navigation/Navbar';
import Meta from './features/react-helmet/Meta';
import { routes } from './routes';
import './styles/main.scss';
import ScrollToTop from './utilities/ScrollToTop';

const App = () => {
  return (
    <div className='max-w-6xl px-2 m-auto'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main className='flex flex-col gap-y-16 lg:gap-y-24 mb-14 xl:mb-16 relative  '>
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                key={route.path}
                element={
                  <>
                    <Meta
                      title={route?.title}
                      description={route?.description}
                    />
                    <div
                      className='absolute text-2xl xl:text-3xl uppercase  text-slate-300 left-0 translate-x-[-250%] xl:translate-x-[-100px] translate-y-[-120px] z-10 before:border-[0.5px]  before:h-[150px] flex items-center gap-6  before:border-slate-200 tracking-widest  before:bg-slate-200 before:block font-light'
                      style={{ writingMode: 'vertical-lr' }}
                    >
                      <span style={{ whiteSpace: 'nowrap' }}>{route.name}</span>
                    </div>
                    <route.element />
                  </>
                }
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
