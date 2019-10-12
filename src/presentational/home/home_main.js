import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import './home.css';

class HomeMain extends Component {
  render() {
    return (
      <div className='main_hero hero_small'>
        <div className='hero_description'>
          <h2>O Trusiaczkach słów kilka</h2>
          <p className='justify'>Blisko nas, w przestrzeni obok, żyje stadko, nie dużo, nie małe. Nie wadzi nikomu... choć trochę rozrabia, ta wesoła, kolorowa gromada. Można je spotkać tuż tam za rogiem, czasem pod kocem, czasem na progu. Przytulą na pewno, prawdopodobnie zaczepią, może podskoczą, raczej nie polecą. A gdy je zobaczysz... zapytaj o księżyc, co ma rogi, i o drzewa co rodzą jagodowe pierogi, a także o ślimaka co za dużo gada i czasem bzdury opowiada.</p>
		      <Link	to='/bajki' className='link T_button'>Trusiaczkowe opowieści</Link>
		    </div>
	      <img src='img/main_menu.png' alt='Trusiaczek' />
	    </div>
	  )
  }
}

export default HomeMain;