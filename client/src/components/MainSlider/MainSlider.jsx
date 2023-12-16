import React, { useState } from 'react'
import './MainSlider.css'
import { Carousel } from 'antd';
const MainSlider = () => {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };


  return (
<div className='w-full bg-slate-500'>
    
    <div className='sm:w-full md:w-full lg:w-full xl:w-full 2xl:container mx-auto'>

    <Carousel afterChange={onChange}>
      <div>
        <img className='w-full' src="./img/slider/hero-1.jpg" alt="" />
      </div>
      <div>
      <img className='w-full' src="./img/slider/hero-2.jpg" alt="" />

      </div>
    </Carousel>
     

    </div>


      </div>
  )
}

export default MainSlider