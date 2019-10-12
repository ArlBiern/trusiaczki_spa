import React from 'react';
import HomeMain from './home_main';
import Footer from './home_footer';
import './home.css';

const Home = () => (
  <div className="container">
    <div className="hero">
  	  <HomeMain />
  	</div>
    <Footer />
  </div>
);

export default Home;