var express = require('express');
var router = express.Router();

const anaSayfa =  function(req, res, next) {
  res.render('anasayfa', 
  { 
  "baslik": 'Anasayfa', 
  "sayfaBaslik" :{
    "siteAdi": "MekanBul",
    "slogan": "Civardaki Mekanları Kesfet"
  },
  "mekanlar":[
    {
      "ad":"Starbucks",
      "puan":"3",
      "adres":"Centrum Garden Avm",
      "imkanlar":["Kahve", "Çay", "Kek"],
      "mesafe":"10km",

    },
    {
      "ad":"Barida Kafe",
      "puan":"4",
      "adres":"Sdü Batı Avm",
      "imkanlar":["Kahve", "Çay", "Kek"],
      "mesafe":"1km",

    },
  ]
});
  }

const mekanBilgisi =  function(req, res, next) {
  res.render('mekanbilgisi', { 
    "baslik": 'Mekan Bilgisi' ,
      "mekanBaslik":"Starbucks",
      "mekanDetay":{
        "ad": "Starbucks",
        "puan":"4",
        "adres":"Centrum Garden Avm",
        "imkanlar":["Kahve", "Çay", "Kek"],
        "saatler":
        [
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"9.00-23.00",
            "kapali":false,
          },
          {
            "gunler":"Cumartesi-Pazar",
            "acilis":"12.00-02.00",
            "kapali":false
          },
      ],
      "imkanlar":["Kahve", "Çay", "Kek"],
      "koordinatlar":{
        "enlem":"37.7",
        "boylam":"30.5"
      },
      "yorumlar":[
        {
          "yorumYapan":"Ömer Burak Kaya",
          "yorumMetni":"Gayet Güzel",
          "yorumTarihi":"20 Ekim 2022",
          "puan":"4"
        }, 
        {
          "yorumYapan":"Berkan Karayel",
          "yorumMetni":"Kaliteli Mekan",
          "yorumTarihi":"19 Ekim 2022",
          "puan":"5"
        }
      ]
      
         

        
      }
      
    },
    

);
  }

const yorumEkle =  function(req, res) {
  res.render('yorumekle', { title: 'Yorum Sayfası'});
  }

  module.exports= {
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
  }