import React from 'react';
import HomeBanner from '../../components/Home-Sections/HomeBanner/HomeBanner';
import HomeAbout from '../../components/Home-Sections/HomeAbout/HomeAbout';
import HomeTeam from '../../components/Home-Sections/HomeTeam/HomeTeam';
import HomeActions from '../../components/Home-Sections/HomeActions/HomeActions';
import HomeTestimonials from '../../components/Home-Sections/HomeTestimonials/HomeTestimonials';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <HomeBanner />
        <HomeAbout />
        <HomeTeam />
        <HomeActions />
        <HomeTestimonials />
      </div>
    </>
  );
};

export default Home;
