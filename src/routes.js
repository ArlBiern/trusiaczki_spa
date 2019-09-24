import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation_component';
import Home from './presentational/home_component';
import TalesComponent from './presentational/tales/tales_component';
import GamesComponent from './presentational/games/games_component';
import Game from './presentational/games/game';
import Drawings from './presentational/drawings/drawings_component';
import Shop from './presentational/shop/shop_component';
import PageNotFound from './presentational/pageNotFound_component';

export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='bajki'>
      <IndexRoute component={TalesComponent}/>
    </Route>
    <Route path='gry' >
      <IndexRoute component={GamesComponent}/>
      <Route path=':id' component={Game}/>
    </Route>
    <Route path='kolorowanki' component={Drawings}/>
    <Route path='sklep' component={Shop}/>
    <Route path='*' component={PageNotFound}/>
  </Route>
);

/*
<Route path='bajki'>
  <IndexRoute component={TalesMainView}/>
  <Route path='zestawienie' component={TalesComponent}/>
</Route>
<Route path='gry' >
  <IndexRoute component={GamesMainView}/>
  <Route path='zestawienie'>
    <IndexRoute component={GamesComponent}/>
    <Route path=':id' component={Game}/>
  </Route>
</Route>
*/