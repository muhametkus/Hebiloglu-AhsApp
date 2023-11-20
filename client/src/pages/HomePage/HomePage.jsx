import React from 'react'
import './HomePage.css'
import MainSlider from '../../components/MainSlider/MainSlider'
import SliderAlt from '../../components/SliderAlt/SliderAlt'
import Urunler from '../../components/Urunler/Urunler'
import AraDiv from '../../components/AraDiv/AraDiv'
const HomePage = () => {
  return (
    <div className='w-full bg-slate-500 overflow-x-clip'>
      <MainSlider/>
      <SliderAlt/>

      <Urunler/>
    </div>
  )
}

export default HomePage