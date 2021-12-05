import React from 'react';
import HomeBanner from '../../components/Home-Sections/HomeBanner/HomeBanner';
import HomeAbout from '../../components/Home-Sections/HomeAbout/HomeAbout';
import HomeTeam from '../../components/Home-Sections/HomeTeam/HomeTeam';
import HomeActions from '../../components/Home-Sections/HomeActions/HomeActions';
import HomeTestimonials from '../../components/Home-Sections/HomeTestimonials/HomeTestimonials';
import HomeMap from '../../components/Home-Sections/HomeMap/HomeMap';
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
        <HomeMap />
      </div>
    </>
  );
};

export default Home;
