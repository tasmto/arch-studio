import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './features/navigation/Footer';
import Navbar from './features/navigation/Navbar';
import Meta from './features/react-helmet/Meta';
import { routes } from './routes';
import './styles/main.scss';

const App = () => {
  return (
    <div className='max-w-6xl px-2 m-auto'>
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={
                <>
                  <Meta title={route?.title} description={route?.description} />
                  <route.element />
                </>
              }
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
