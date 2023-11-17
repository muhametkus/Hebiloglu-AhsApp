import React, { useState } from 'react'
import './MainSlider.css'

const MainSlider = () => {
  

  return (
<div className='w-full flex flex-row bg-slate-500'>
    
<div className="carousel mx-auto w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="http://www.hebilogluahsap.com/img/hero/hero-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="http://www.hebilogluahsap.com/img/hero/hero-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>

      </div>
  )
}

export default MainSlider