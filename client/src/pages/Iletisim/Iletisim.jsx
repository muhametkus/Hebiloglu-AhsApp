import React from 'react'
import './Iletisim.css'
import UstDiv from '../../components/UstDiv/UstDiv'
import IletisimComp from '../../components/IletisimComponents/IletisimComp'
import Harita from '../../components/IletisimComponents/Harita'
const Iletisim = () => {
  return (
    <div className=''>
    <UstDiv SayfaAdi="İLETİŞİM "/>
    <div className='flex flex-col 2xl:w-[1536px] w-[80%] md:w-[95%] mx-auto'>
    <IletisimComp/>
        <Harita/>
    </div>
    </div>
  )
}

export default Iletisim