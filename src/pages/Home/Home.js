import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeBanner from '../../components/Home-Sections/HomeBanner/HomeBanner';
import HomeAbout from '../../components/Home-Sections/HomeAbout/HomeAbout';
import HomeTeam from '../../components/Home-Sections/HomeTeam/HomeTeam';
import HomeActions from '../../components/Home-Sections/HomeActions/HomeActions';
import HomeTestimonials from '../../components/Home-Sections/HomeTestimonials/HomeTestimonials';
import HomeMap from '../../components/Home-Sections/HomeMap/HomeMap';
import './Home.css';

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="home-container">
        <HomeBanner />
        <HomeAbout />
        <HomeTeam />
        <HomeActions />
        <HomeTestimonials />
        <HomeMap />
      </div>
    </>
  );
};

export default Home;
