import React from 'react'

const IletisimComp = () => {
  return (
    <div className='w-full '>

        <h2 className='text-orange-500 text-3xl'>BİZİMLE İLETİŞİME GEÇİN</h2>

        <div className='flex w-full justify-between flex-wrap gap-y-8 my-5'>
            <div className='flex flex-row gap-x-5'>
              <div><img src="./img/iletisim/tel.png" alt="" /></div>
              <div className='flex flex-col'>
                <h2 className='text-orange-500 text-2xl'>Telefon Numaralarımız</h2>
                <span className='flex flex-col ml-1'>
                <a href="tel:+905423502232">0 216 397 54 01</a>
                <a href="tel:+905423502232">0 542 350 22 32</a>
                <a href="tel:+905433218234">0 543 321 82 34</a>
                <a href="tel:+905433218235">0 543 321 82 35</a>
                </span>
              </div>
            </div>

            <div>

            <div className='flex flex-row gap-x-5'>
              <div><img src="./img/iletisim/mail.png" alt="" /></div>
              <div className='flex flex-col'>
                <h2 className='text-orange-500 text-2xl'>Mail Adreslerimiz</h2>
                <span className='flex flex-col ml-1'>
                <a href="mailto:info@hebilogluahsap.com">info@hebilogluahsap.com</a>
                <a href="mailto:hebiloglumobilya@hotmail.com">hebiloglumobilya@hotmail.com</a>
                </span>
              </div>
            </div>

            
            </div>


            <div>

            <div className='flex flex-row gap-x-5'>
              <div><img src="./img/iletisim/harita.png" alt="" /></div>
              <div className='flex flex-col'>
                <h2 className='text-orange-500 text-2xl'>Adreslerimiz</h2>
                <span className='flex flex-col ml-1 gap-y-2'>
                <p><b>Showroom:</b> Fevizçakmak mh. Mustafa Kemal cd. No:4/B<br/>Pendik/İstanbul</p>
                <p><b>Fabrika:</b> Şekerpınar Küçük Sanayi Bölgesi<br/>Çayırova/Kocaeli</p>
                </span>
              </div>
            </div>


            </div>
        </div>

    </div>
  )
}

export default IletisimComp