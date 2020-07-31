import React from 'react';
import Profile from 'components/Profile';
import Skills from 'components/Skills';

export default function Home() {
  return (
    <div className="row">
      <div className=" col-sm-12 col-md-6 col-lg-6">
        <Profile />
      </div>
      <div className=" col-sm-12 col-md-6 col-lg-6">
        <Skills />
      </div>
    </div>
  );
}
