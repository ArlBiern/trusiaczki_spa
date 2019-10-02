import React from 'react';
import { Link } from 'react-router';
import './navigation.css';
import $ from "jquery";

// Hamburger menu
$(document).delegate('.open', 'click', function(event){
  $(this).addClass('openned');
  $("#pointer_1").hide();
  $("#pointer_2").hide();
  event.stopPropagation();
});

$(document).delegate('body', 'click', function(event) {
  $('.open').removeClass('openned');
  setTimeout(pointer_come_back, 1000);
  event.stopPropagation();
});

$(document).delegate('.cls', 'click', function(event){
  $('.open').removeClass('openned');
  setTimeout(pointer_come_back, 1000);
  event.stopPropagation();
});

function pointer_come_back() {
  if (window.screen.width <= 900) {
    $("#pointer_1").show();
    $("#pointer_2").show();
  }
};

const Navigation = props => (
  <div>
      <header className="container">
      <nav>
        <Link to='/'><img src="img/logo_T.png" className="logo logo_b" alt="logo" /></Link>
        <ul className="main_menu">
          <li className="fairy_tales nav_color" data-name="tales"><Link to='/bajki' className="link">bajki</Link></li>
          <li className="games nav_color" data-name="games"><Link to='/gry' className="link">gry</Link></li>
          <li className="drawings nav_color" data-name="drawings"><Link to='/kolorowanki' className="link">rysowanki</Link></li>
          <li className="shop nav_color" data-name="shop"><Link to='/sklep' className="link">sklep</Link></li>
        </ul>
        <img src="img/pointer_1.png" className="pointer" id="pointer_1" alt="strzałka" />
        <img src="img/pointer_2.png" className="pointer" id="pointer_2" alt="strzałka" />
        <div className="hamburger">
          <div className="menu">
            <div className="open" id="open">
              <span></span>
              <span className="cls">
                <ul className="sub-menu">
                  <li className="fairy_tales nav_color" data-name="tales"><Link to='/bajki' className="link"><i className="fa fa-book"></i>bajki</Link></li>
                  <li className="games nav_color" data-name="games"><Link to='/gry' className="link"><i className="fa fa-gamepad"></i>gry</Link></li>
                  <li className="drawings nav_color" data-name="drawings"><Link to='/kolorowanki' className="link"><i className="fa fa-pencil"></i>rysowanki</Link></li>
                  <li className="shop nav_color" data-name="shop"><Link to='/sklep' className="link"><i className="fa fa-gift"></i>sklep</Link></li>
                </ul>
              </span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
    {props.children}
  </div>
);

export default Navigation

