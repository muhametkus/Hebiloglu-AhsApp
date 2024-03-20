import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const UrunEkle = () => {
  const apiUrl = "https://api.hebilogluahsap.com/urunApi";
  const [modelAdi, setModelAdi]=useState("");
  const [aciklama, setAciklama]=useState("");
  const [resimLinki, setResimLinki]=useState("");
  const [kategori, setKategori]=useState("");
  const [altKategori, setAltKategori]=useState("");
  const [altKategoriLink, setAltKategoriLink]=useState("");
  const [urunLinki, setUrunLinki]=useState("");

  const navigate=useNavigate();


  const urunEkle=()=>{
    Axios.post(apiUrl+"/urun-ekle", {
      modelAdi,
      aciklama,
      resimLinki,
      kategori,
      altKategori,
      altKategoriLink,
      urunLinki
    })
    .then((response)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ürün Başarıyla Eklendi!',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/urun-ekle');
    })

  }

  const handleAltKategoriChange = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];

    setAltKategori(selectedValue);
    setAltKategoriLink(selectedOption.getAttribute("value2"));
  };

  return (
    <div className="flex flex-row flex-wrap w-full">
      <div className="flex flex-col gap-y-3 mx-auto">
        <label className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Model Adı Nedir?"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setModelAdi(e.target.value)}
          />
        </label>

        <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setKategori(e.target.value)}>
  <option defaultValue={""}>Kategori Seç</option>
  <option value={"Melamin"}>Melamin</option>
  <option  value={"Lake"}>Lake</option>
  <option  value={"Amerikan"}>Amerikan</option>
  <option  value={"Mutfak"}>Mutfak Dolapları</option>
  <option  value={"Banyo"}>Banyo Dolapları</option>
</select>
<select className="select select-bordered w-full max-w-xs" onChange={handleAltKategoriChange}>
  
  <option  defaultValue={" "}>Alt Kategori Seç</option>
  <option  value={"Düz Melamin"} value2="duz-melamin-kapilar">Düz Melamin</option>
  <option  value={"Göbekli Melamin"} value2="gobekli-melamin-kapilar">Göbekli Melamin</option>
  <option  value={"Standart Lake"} value2="standart-lake-kapilar">Standart Lake</option>
  <option value={"Lüks Lake"} value2="luks-lake-kapilar">Lüks Lake</option>
  <option value={"Amerikan"} value2="amerikan-kapilar">Amerikan</option>
  <option value={"Akrilik"} value2="akrilik">Akrilik</option>
  <option value={"High Gloss"} value2="highgloss">High Gloss</option>
  <option value={"Mebran"} value2="mebran">Mebran</option>
  <option value={"MDF(dolap)"} value2="mdfdolap">MDF(dolap)</option>
  <option value={"SuntaLam"} value2="suntalam">SuntaLam</option>
</select>

<label className="form-control w-full max-w-xs">
          <textarea
            placeholder="Açıklama"
            className="textarea textarea-bordered" onChange={(e)=>setAciklama(e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <textarea
            placeholder="Resim Linki"
            className="textarea textarea-bordered" onChange={(e)=>setResimLinki(e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Ürün için link"
            className="input input-bordered w-full max-w-xs"
            defaultValue={modelAdi.toLowerCase()}
            onChange={(e) => setUrunLinki(e.target.value)}
          />
        </label>

        <button className="btn btn-info" onClick={urunEkle}>Gönder</button>

      </div>
    </div>
  );
};

export default UrunEkle;
