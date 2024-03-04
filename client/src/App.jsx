import './App.css'
import HomePage from './pages/HomePage/HomePage'
import {Route, Routes} from "react-router-dom";
import Iletisim from './pages/Iletisim/Iletisim';
import Hakkimizda from './pages/Hakkimizda/Hakkimizda';
import UrunDetay from './pages/UrunDetay/UrunDetay';
import UrunEkle from './pages/Admin/UrunEkleGuncelle/UrunEkle';
import MelaminKapilar from './pages/Urunler/Kapilar/MelaminKapilar';
import LakeKapilar from './pages/Urunler/Kapilar/LakeKapilar';
import UrunlerKategorize from './pages/Urunler/UrunlerKategorize';
import Siparisler from './pages/Admin/Siparisler/Siparisler';
import Mutfak from './pages/Urunler/Mutfak/Mutfak';

function App() {

  return (
  
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/iletisim" element={<Iletisim/>} />
    <Route path="/hakkimizda" element={<Hakkimizda/>} />
    <Route path="/melamin-kapilar" element={<MelaminKapilar/>} />
    <Route path="/lake-kapilar" element={<LakeKapilar/>} />
    <Route path="/urun-detay" element={<UrunDetay/>} />
    <Route path="/urun-ekle" element={<UrunEkle/>} />
    <Route path="/urun-detay/:modelAdi" element={<UrunDetay/>} />
    <Route path="/urunler/:altkategoriLink" element={<UrunlerKategorize/>} />
    <Route path="/admin/siparisler" element={<Siparisler/>}/>
    <Route path="/urunler/mutfak-dolaplari" element={<Mutfak/>}/>


    </Routes>
  )
}

export default App
