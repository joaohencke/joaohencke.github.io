import 'jquery';
import 'popper.js';
import 'bootstrap';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import { Root } from 'components';
import pages from 'pages';

import './App.scss';

const routes = [{
  component: Root,
  routes: pages,
}];

function App() {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
