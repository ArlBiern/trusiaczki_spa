import React from 'react';
import { Link } from 'react-router';

const Navigation = props => (
  <div>
    <div>
      Tutaj jest miejsce na logo itp.
    </div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/bajki'>Bajki</Link></li>
      <li><Link to='/gry'>Gry</Link></li>
      <li><Link to='/sklep'>Sklep</Link></li>
      <li><Link to='/kolorowanki'>Kolorowanki</Link></li>
    </ul>
    {props.children}
  </div>
);

export default Navigation

