/** @format */

import React from "react";

const MainBanner = () => {
  return (
    <div className='relative'>
      <img
        src={assets.main_banner_bg}
        alt='banner'
        className='w-full md:block hidden'
      />
      <img
        src={assets.main_banner_bg_sm}
        alt='banner'
        className='w-full md:hidden'
      />
      <div className='text-7xl font-bold'>tahmina</div>
    </div>
  );
};

export default MainBanner;
