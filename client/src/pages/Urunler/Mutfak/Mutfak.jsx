import { CaretRightOutlined } from '@ant-design/icons'
import React from 'react'
import UstDiv from '../../../components/UstDiv/UstDiv'

const Mutfak = () => {
    let dolaplar = [
        { model: "AKRİLİK", resimLink: "/img/mutfak/akrilik-min.jpg" },
        { model: "HIGH GLOSS", resimLink: "/img/mutfak/highgloss-min.jpeg" },
        { model: "MEBRAN", resimLink: "/img/mutfak/mebran-min.jpg" },
        { model: "MDFLAM", resimLink: "/img/mutfak/mdflam-min.jpg" },
        { model: "LAKE", resimLink: "/img/mutfak/lake-min.jpg" },
      ];


  return (
    <div className="Ürünler pb-14">
      <UstDiv SayfaAdi={`MUTFAK DOLAPLARI`} />
      <div className="flex flex-row flex-wrap gap-x-5 gap-y-14 justify-between 2xl:w-[1536px] w-[80%] md:w-[95%] mx-auto">
        {dolaplar &&
          dolaplar.map((urun) => (
            <div
              key={urun.model}
              className="w-[500px] h-[500px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center "
            >
              <button>
                <img
                  className="resim-hover2 w-[450px] rounded-tl-lg rounded-tr-lg"
                  src={urun.resimLink}
                  alt={urun.model}
                />
                <h3 className="text-center text-2xl my-3 text-slate-700">
                  {urun.model}
                </h3>
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Mutfak