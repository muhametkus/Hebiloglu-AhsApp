
import React, { useEffect, useState } from "react";
import UstDiv from "../../components/UstDiv/UstDiv";
import {useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import Axios from "axios";


const UrunDetay = () => {
  const[iletisim,SetIletisim]=useState("");
  const[adSoyad,SetAdSoyad]=useState("");
  const[aksesuar,SetAksesuar]=useState("");
  const { urunLinki } = useParams();
  console.log("dandini: "+urunLinki);
  const [urun,SetUrun]=useState([]);
  const apiUrl = "https://apideneme.hebilogluahsap.com/nodeapi";
  
  useEffect(() => {
    Axios.get(`${apiUrl}/urunler/urun/${window.location.pathname.split("/")[2]}`)
      .then((response) => {
        SetUrun(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [urunLinki]);
  
  let KapiUcreti = 0;
  if (urun.altKategoriLink=="duz-melamin-kapilar") {
    KapiUcreti = KapiUcreti+3500;
    
  }
  else{
    
  }
  
  const [kapiAdedi, setKapiAdedi] = useState(0);

  const KapiAdediInput = (e) => {
    setKapiAdedi(e.target.value);
  };

  const [montajYeri, setMontajYeri] = useState("");

  const MontajYeriInput = (e) => {
    setMontajYeri(e.target.value);
  };

  const [kasaGenisligi, setKasaGenisligi] = useState("");

  const KasaGenisligiInput = (e) => {
    setKasaGenisligi(e.target.value);
  };

  const [camliSayisi, setCamliSayisi] = useState(0);

  const CamliSayisiInput = (e) => {
    setCamliSayisi(e.target.value);
  };

  if(camliSayisi<0){
    setCamliSayisi(0);
  }
  if(kapiAdedi<0){
    setKapiAdedi(0);
  }



  if (kapiAdedi == 1 || kapiAdedi == 2) {
    KapiUcreti = parseInt((KapiUcreti * 1.9)/100)*100;
  }
  if (kapiAdedi == 3) {
    KapiUcreti = KapiUcreti * 1.5;
  }

  if (kapiAdedi == 4) {
    KapiUcreti = KapiUcreti + 500;
  }

  if (kapiAdedi == 5) {
    KapiUcreti = KapiUcreti + 200;
  }

  if (kapiAdedi > 5) {
    KapiUcreti = KapiUcreti + 0;
  }

  if(montajYeri=="Şile"||montajYeri=="Kadıköy"){
    KapiUcreti=KapiUcreti+500;
  }
  if(montajYeri=="Ümraniye"||montajYeri=="Maltepe"){
    KapiUcreti=KapiUcreti+300;
  }

  if(montajYeri=="Montajsız"){
    KapiUcreti=KapiUcreti-950;
  }
  if(montajYeri=="İlçe Seçiniz"||montajYeri==""|| kasaGenisligi=="" || kasaGenisligi=="Kasa Genişliği"){
    KapiUcreti=KapiUcreti*0;
  }
  if(kasaGenisligi=="15'lik Kasa (13.5 tuğla)"){
    KapiUcreti=KapiUcreti+200;
  }
  if(kasaGenisligi=="20'lik Kasa (18.5 tuğla)"){
    KapiUcreti=KapiUcreti+400;
  }

  let toplamTutar=(KapiUcreti * kapiAdedi)+(camliSayisi*1000);

  const[sokumUcreti, SetSokumUcreti]=useState("");

  let sokumToplam=0;

  if (sokumUcreti=="Evet (kapı adedi x 150TL)") {
    
    toplamTutar=toplamTutar+(kapiAdedi*150);

    sokumToplam=(kapiAdedi*150);
  }
  else{
    toplamTutar=toplamTutar+0;
    sokumToplam=0;

  }

  const musteriBilgileriGonder=()=>{
    Axios.post(apiUrl+"/urun-musteri", {
      modelAdi:urun.modelAdi,
      altKategori:urun.altKategori,
      tekKapiUcret:KapiUcreti,
      toplamUcret:toplamTutar,
      kapiAdedi:kapiAdedi,
      camliAdedi:camliSayisi,
      kasaGenisligi:kasaGenisligi,
      montajYeri:montajYeri,
      kapiSokumu:sokumToplam,
      adSoyad:adSoyad,
      iletisim:iletisim,
      kapiKolu:aksesuar,
    })
    .then((response)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Fiyat Teklifiniz Kaydedildi!',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/urun-ekle');
    })

  }

  


  return (
    <div className="w-full">
      <UstDiv SayfaAdi="Ürün Detayı" />
      <div className="flex flex-row flex-wrap mx-auto 2xl:w-[1536px] w-[80%] md:w-[95%] sm:mx-auto justify-center gap-x-16 ">
      
        <div className="w-[360px] h-[800px] sm:mx-auto flex flex-col rounded-xl items-center">

         
  <img
    className="resim-hover2 w-[360px] rounded-tl-lg rounded-tr-lg sm:mx-auto"
    src={urun.resimLinki}
    alt="Lüks Lake Kapı"
  />

              
            <h3 className="text-center text-2xl my-3 text-slate-700">
              {urun.modelAdi}
            </h3>

        </div>

        <div className="flex flex-col gap-y-5 ">
          <div className="flex flex-row items-center gap-x-5 w-full justify-between">
            <div className="text-lg font-semibold">Kaç Adet Kapınız var?</div>
            <div>
              <input
                type="number"
                placeholder="Kapı Adedi"
                className="input input-bordered w-full max-w-xs"
                value={kapiAdedi}
                onChange={KapiAdediInput}
              />
            </div>
          </div>

          <div className="flex flex-row items-center w-full justify-between">
            <div className="text-lg font-semibold">Montaj Yeri Neresi?</div>
            <div>
              <select className="select select-bordered w-[225px]" value={montajYeri}
                onChange={MontajYeriInput}>

                <option selected>İlçe Seçiniz</option>
                <option>Montajsız</option>
                <option>Pendik</option>
                <option>Kartal</option>
                <option>Tuzla</option>
                <option>Gebze</option>
                <option>Maltepe</option>
                <option>Kadıköy</option>
                <option>Şile</option>
                <option>Sultanbeyli</option>
                <option>Sancaktepe</option>
                <option>Ümraniye</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row items-center w-full justify-between">
            <div className="text-lg font-semibold">Kasa Genişliği</div>
            <div>
              <select className="select select-bordered w-[225px]" value={kasaGenisligi}
                onChange={KasaGenisligiInput}>

                <option selected>Kasa Genişliği</option>
                <option>10'luk Kasa (8.5 tuğla)</option>
                <option>15'lik Kasa (13.5 tuğla)</option>
                <option>20'lik Kasa (18.5 tuğla)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row items-center w-full justify-between">
            <div className="text-lg font-semibold">Kaç tanesi camlı:</div>
            <div>
              <input
                type="number"
                placeholder="1 tane camlı farkı 1.000TL"
                className="input input-bordered w-full max-w-xs" value={camliSayisi}
                onChange={CamliSayisiInput}
              />
            </div>
          </div>


          <div className="flex flex-row items-center w-full justify-between">
            <div className="text-lg font-semibold">Kapı Kolu Seçimi</div>
            <div>
              <select className="select select-bordered w-[225px]" onChange={(e)=>SetAksesuar(e.target.value)}>
                <option selected>
                  Standart Aksesuar
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-row items-center w-full justify-between">
            <div className="text-lg font-semibold">Kapı Sökümü var mı?</div>
            <div>
              <select className="select select-bordered w-[225px]" value={sokumUcreti} onChange={(e) => SetSokumUcreti(e.target.value)}>
                <option>Hayır/kendim sökeceğim</option>
                <option>Evet (kapı adedi x 150TL)</option>
              </select>
            </div>
          </div>

          <div className="text-2xl  text-red-700 my-10">
          <p>
  Kapı Adet Fiyatı:{" "}
  <span className="font-bold">
    {kapiAdedi==0||kapiAdedi==""
      ? "0"
      : `${KapiUcreti}`} TL
  </span>{" "}
  (KDV Hariç)
</p>
<p>Kapı Söküm Ücreti: <span className="font-bold">{sokumToplam} TL</span>{" "}
              (KDV Hariç)</p>

            <p>
              Toplam Fiyat:{" "}
              <span className="font-bold">{toplamTutar} TL</span>{" "}
              (KDV Hariç)
            </p>
            {toplamTutar == 0 ? (
  ""
) : (
  <div className="flex items-center bg-blue-500 bg-opacity-50 text-black text-lg px-3 py-2 w-[92%] mt-4" role="alert">
    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
    </svg>
    <p>Tahmini fiyattır. Detaylı fiyat için teklif alınız.</p>
  </div>
)}

          </div>

          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row items-center w-full justify-between">
              <div className="text-lg font-semibold">Ad Soyad:</div>
              <div>
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e)=>SetAdSoyad(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full justify-between">
              <div className="text-lg font-semibold">Telefon Numarası:</div>
              <div>
                <input
                  type="text"
                  placeholder="Telefon veya Mail"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e)=>SetIletisim(e.target.value)}
                />
              </div>
            </div>

            <p>Fiyat Teklifi almak için gönder Butonuna tıklayın.</p>

            <button className="btn btn-accent w-[150px] mx-auto" onClick={musteriBilgileriGonder}>Gönder</button>
          </div>
        </div>
      </div>

      <div className="2xl:w-[1000px] w-[60%] md:w-[70%] sm:w-[80%] container mx-auto pt-5 pb-10 justify-center">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-4xl font-bold">Açıklama</h2>
          <h3>
            <span className="font-bold">Model Adı: </span> {urun.modelAdi}
          </h3>
          <h3>
            <span className="font-bold">Kategorisi: </span> {urun.kategori}
          </h3>
          <h3>
            <span className="font-bold">Alt Kategorisi: </span> {urun.altKategori}
          </h3>
          <p className="w-[80%]">
            <span className="font-bold">Açıklaması: </span>{urun.aciklama}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrunDetay;
