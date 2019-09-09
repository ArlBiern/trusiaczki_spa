import React from 'react';
import { Link } from 'react-router';

const TalesMainView = () => (
  <div>
    <h1>To jest komponent tales</h1>
    <Link to={'bajki/zestawienie'}>Link do bajek</Link>
  </div>
);

export default TalesMainView;