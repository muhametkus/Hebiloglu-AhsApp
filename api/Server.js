const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const UrunModel = require("./models/Urun");
require("dotenv").config();
const UrunMusteriModel=require("./models/UrunMusteri");

const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = 3005 || process.env.PORT;

app.listen(port, async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://muhametkus:Pendik34@cluster0.d8t7adt.mongodb.net/?retryWrites=true&w=majority");
    console.log("MongoDB bağlantısı başarılı!");
  } catch (err) {
    console.error("MongoDB bağlantısı hatası:", err);
  }
  console.log(`Port: ${port} Server çalışıyor`);
});

app.get("/urunler", async (req, res) => {
  try {
    const result = await UrunModel.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});


app.get("/urunler/urun/:urunLinki", async (req, res) => {
  const urunLinki = req.params.urunLinki;

  try {
    const result = await UrunModel.findOne({ urunLinki: urunLinki });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

app.get("/urunler/kategori/:altKategoriLink", async (req, res) => {
  const altKategoriLink = req.params.altKategoriLink;

  try {
    const result = await UrunModel.find({ altKategoriLink: altKategoriLink });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});




app.post("/urun-ekle", async (req, res) => {
  const urun = req.body;
  const yeniUrun = new UrunModel(urun);
  await yeniUrun.save();

  res.json(urun);
});

app.post("/urun-musteri", async (req, res) => {
  const urunMusteri = req.body;
  const yeniUrunMusteri = new UrunMusteriModel(urunMusteri);
  await yeniUrunMusteri.save();

  res.json(urunMusteri);
});

