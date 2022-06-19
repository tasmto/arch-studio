import React from 'react';
import { site_title } from './constants/GlobalConstants';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioCollectionPage from './pages/PortfolioCollectionPage';
import PortfolioPiecePage from './pages/PortfolioPiecePage';
import TeamMemberPage from './pages/TeamMemberPage';

type Route = {
  path: string;
  title: string;
  element: React.FC;
  description?: string;
  name: string;
};

export const routes: Array<Route> = [
  {
    path: '/',
    title: site_title,
    element: HomePage,
    name: 'Home',
  },
  {
    path: '/about-us',
    title: `${site_title} | About`,
    element: AboutPage,
    name: 'About Us',
  },
  {
    path: '/team/:id',
    title: `${site_title} | Team`,
    element: TeamMemberPage,
    name: 'Our Team',
  },
  {
    path: '/get-in-touch',
    title: `${site_title} | Contact`,
    element: ContactPage,
    name: 'Contact',
  },
  {
    path: '/our-work',
    title: `${site_title} | Work`,
    element: PortfolioCollectionPage,
    name: 'Portfolio',
  },
  {
    path: '/our-work/:id',
    title: `${site_title} | Work`,
    element: PortfolioPiecePage,
    name: 'Our Work',
  },
];
