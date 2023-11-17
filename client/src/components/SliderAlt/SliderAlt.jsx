import React from 'react'
import './SliderAlt.css'
const SliderAlt = () => {
  return (
    <div className='w-full grid grid-cols-1  bg-gray-200'>
        <h2 className='w-[80%] md:w-[90%] mx-auto text-5xl font-light mb-5 mt-16 sm:mb-0'>SİZE ÖZEL DEKORASYON</h2>
        <div className='w-[80%] md:w-[90%] flex justify-between  row sm:grid sm:grid-cols-2 sm:gap-12 sm:py-16 py-8 mx-auto'>
            
            <div>
                <img className='mx-auto mb-2 resim-hover' src="./img/SliderAltImg/services-1.png" alt="" />
                <h2 className='text-center text-xl resim-hover'>KONUT<br/>DİZAYNI</h2>
            </div>

            <div>
                <img className='mx-auto mb-2 resim-hover' src="./img/SliderAltImg/services-2.png" alt="" />
                <h2 className='text-center text-xl resim-hover'>OFİS<br/>DİZAYNI</h2>
            </div>

            <div className=''>
                <img className='mx-auto mb-2 resim-hover' src="./img/SliderAltImg/services-3.png" alt="" />
                <h2 className='text-center text-xl resim-hover'>ANAHTAR TESLİM<br/>PROJELER</h2>
            </div>

            <div>
                <img className='mx-auto mb-2 resim-hover' src="./img/SliderAltImg/services-4.png" alt="" />
                <h2 className='text-center text-xl resim-hover'>ÖLÇÜYE ÖZEL<br/>İMALAT</h2>
            </div>
        </div>
    </div>
  )
}

export default SliderAlt