import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSec from '../Pages/Shared/FooterSec/FooterSec';

import TopNavbar from '../Pages/Shared/TopNavbar/TopNavbar';

const Main = () => {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <Outlet></Outlet>
      <FooterSec></FooterSec>
      
    </div>
  );
};

export default Main;