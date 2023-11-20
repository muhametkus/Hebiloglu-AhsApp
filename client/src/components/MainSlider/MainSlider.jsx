import React, { useState } from 'react'
import './MainSlider.css'
import { Carousel } from 'antd';
const MainSlider = () => {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };


  return (
<div className='w-full bg-slate-500'>
    
    <div className='w-full 2xl:w-[1920px] mx-auto'>

    <Carousel afterChange={onChange}>
      <div>
        <img src="./img/slider/hero-1.jpg" alt="" />
      </div>
      <div>
      <img src="./img/slider/hero-2.jpg" alt="" />

      </div>
    </Carousel>
     

    </div>


      </div>
  )
}

export default MainSlider