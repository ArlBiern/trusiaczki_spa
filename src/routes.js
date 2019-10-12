import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation/navigation_component';
import Home from './presentational/home/home_component';
import TalesComponent from './presentational/tales/tales_component';
import GamesComponent from './presentational/games/games_component';
import Game from './presentational/games/game';
import Drawings from './presentational/drawings/drawings_component';
import Shop from './presentational/shop/shop_component';
import AboutUs from './presentational/footer/about_us';
import Customers from './presentational/footer/customers';
import Contact from './presentational/footer/contact';
import Delivery from './presentational/footer/delivery';
import Regulations from './presentational/footer/regulations';
import PrivacyPolicy from './presentational/footer/privacy_policy';
import Warranty from './presentational/footer/warranty';
import UserManual from './presentational/footer/user_manual';
import PageNotFound from './presentational/pageNotFound_component';

export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='bajki'>
      <IndexRoute component={TalesComponent}/>
    </Route>
    <Route path='gry' >
      <IndexRoute component={GamesComponent}/>
      <Route path=':name' component={Game}/>
    </Route>
    <Route path='rysowanki' component={Drawings}/>
    <Route path='sklep' component={Shop}/>
    <Route path='oNas' component={AboutUs}/>
    <Route path='klienci' component={Customers}/>
    <Route path='kontakt' component={Contact}/>
    <Route path='dostawa' component={Delivery}/>
    <Route path='regulamin' component={Regulations}/>
    <Route path='prywatnosc' component={PrivacyPolicy}/>
    <Route path='gwarancja' component={Warranty}/>
    <Route path='instrukcje' component={UserManual}/>
    <Route path='*' component={PageNotFound}/>
  </Route>
);
