import React from 'react';
import FirstHeader from '../components/generalComponents/FirstHeader';
import SecondHeader from '../components/generalComponents/SecondHeader';
import Carousel from '../components/Carousel';

function Header() {


  return (
    <header>
      <FirstHeader />
      <SecondHeader />
      {/* <Carousel  /> */}
    </header>
  );
}

export default Header;
