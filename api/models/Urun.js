const mongoose = require('mongoose');

const UrunSchema = new mongoose.Schema({
  modelAdi:{
    type: String,
    required: true,
  },
  kategori:{
    type: String,
    required: true,
  },
  altKategori:{
    type: String,
    required: true,
  },
  altKategoriLink:{
    type: String,
    required: true,
  },
  aciklama:{
    type: String,
    required: true,
  },
  resimLinki:{
    type: String,
    required: true,
  },
  urunLinki:{
    type: String,
    required: true,
  }
});

const UrunModel = mongoose.model('Urun', UrunSchema);

module.exports = UrunModel;