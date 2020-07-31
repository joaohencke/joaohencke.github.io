import React from 'react';
import { renderRoutes } from 'react-router-config';

import Nav from '../Nav';

export default function Root({ route }) {
  return (
    <div className="container">
      <Nav />
      <main>{renderRoutes(route.routes)}</main>
    </div>
  );
}
