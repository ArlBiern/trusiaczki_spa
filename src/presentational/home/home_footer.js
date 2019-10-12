import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import './home.css';

class Footer extends Component {
  render() {
    return (
      <div className="container">
		<footer>
		  <ul>
		    <li><img src="img/logo_small_WB.png" alt="logo" /> Witamy!</li>
		    <li className="justify">Znajdziesz na tej stronie ciekawe gry i historie dla swojej pociechy oraz niepowtarzalne zabawki wytwarzane z pasją w małym rodzinnym warsztacie.</li>
		  </ul>
		  <ul>
		    <li>Informacje:</li>
		    <li><Link to='/oNas'>O nas</Link></li>
		    <li><Link to='/klienci'>Zadowoleni Klienci</Link></li>
		    <li><Link to='/kontakt'>Kontakt</Link></li>
		  </ul>
		  <ul>
		    <li>Sklep:</li>
		    <li><Link to='/dostawa'>Dostawa</Link></li>
		    <li><Link to='/regulamin'>Regulamin</Link></li>
		    <li><Link to='/prywatnosc'>Prywatność</Link></li>
		    <li><Link to='/gwarancja'>Warunki gwarancji</Link></li>
		    <li><Link to='/instrukcje'>Instrukcje obsługi</Link></li>
		  </ul>
		  <ul>
		    <li>Odwiedź nas:</li>
		    <li className="social_media">
			  <a href="https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna" target="_blank" rel="noopener noreferrer" className="fa_icon"><i className="fa fa-facebook"></i></a>
			  <a href="https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna" target="_blank" rel="noopener noreferrer" className="fa_icon"><i className="fa fa-youtube-play"></i></a>
			  <a href="https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna" target="_blank" rel="noopener noreferrer" className="fa_icon"><i className="fa fa-pinterest"></i></a>
		    </li>
		  </ul>
		  <p> Copyright 2019 ThinkTree. Wszelkie prawa zastrzeżone │ Strona korzysta z plików cookies zgodnie z <a href="https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna" target="_blank" rel="noopener noreferrer">polityką prywatności</a></p>
		</footer>
	  </div>
	)
  }
}

export default Footer;