import React from 'react';
import { Link } from 'react-router';

const GamesMainView = () => (
  <div>
    <h1>To jest komponent GAMES</h1>
    <Link to={'gry/zestawienie'}>Link do gier</Link>
  </div>
);

export default GamesMainView;