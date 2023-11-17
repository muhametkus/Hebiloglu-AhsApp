import React from 'react'
import './HomePage.css'
import MainSlider from '../../components/MainSlider/MainSlider'
import SliderAlt from '../../components/SliderAlt/SliderAlt'
import Urunler from '../../components/Urunler/Urunler'
const HomePage = () => {
  return (
    <div className='w-full'>
      <MainSlider/>
      <SliderAlt/>
      <Urunler/>
    </div>
  )
}

export default HomePage