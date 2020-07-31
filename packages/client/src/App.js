import 'jquery';
import 'popper.js';
import 'bootstrap';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import { Root } from 'components';
import pages from 'pages';

import './App.scss';

const routes = [{
  component: Root,
  routes: pages,
}];

function App() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
