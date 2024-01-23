const mongoose = require('mongoose');

const UrunMusteriSchema = new mongoose.Schema({
  modelAdi:{
    type: String,
    required: false,
  },
  altKategori:{
    type: String,
    required: false,
  },
  tekKapiUcret:{
    type: String,
    required: false,
  },
  toplamUcret:{
    type: String,
    required: false,
  },
 kapiAdedi:{
    type: String,
    required: false,
  },
  camliAdedi:{
    type: String,
    required: false,
  },
  kasaGenisligi:{
    type: String,
    required: false,
  },
  montajYeri:{
    type: String,
    required: false,
  },
  kapiKolu:{
    type: String,
    required: false,
  },
  kapiSokumu:{
    type: String,
    required: false,
  },
  adSoyad:{
    type: String,
    required: false,
  },
  iletisim:{
    type: String,
    required: false,
  },

});

const UrunMusteriModel = mongoose.model('UrunMusteri', UrunMusteriSchema);

module.exports = UrunMusteriModel;