import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info= InfoPage;
  fav = [];
  favo = FavPage;

  constructor(public navCtrl: NavController) {

  }

  casas = [
    {
      id:0,
      nombre: "Mansión Joestar",
      ubicacion: "Inglaterra",
      precio:"$ 3,900,000" ,
      imagen: "../assets/1.jpg" ,
      cuartos: "9",

    },

    {
      id:1,
      nombre: "Hotel sin historia extraña detras",
      ubicacion: "Colorado",
      precio: "$ 10,000,000" ,
      imagen: "../assets/2.jpg" ,
      cuartos: "666",
    }, 

    {
      id:2,
      nombre: "Casa en venta",
      ubicacion: "San Diego",
      precio:"$ sinko peso" ,
      imagen: "../assets/3.jpg" ,
      cuartos: "3",
    },

    {
      id:3,
      nombre: "Casa en zona segura",
      ubicacion: "Ecatepec",
      precio:"$ 250,000" ,
      imagen: "../assets/4.jpg" ,
      cuartos: "4",
    },

    {
      id:4,
      nombre: "Casa en bosque",
      ubicacion: "Bosque de chapultepec",
      precio:"$ 2,500,000" ,
      imagen: "../assets/5.jpg" ,
      cuartos: "1",
    },

    {
      id:5,
      nombre: "Casa en Pantano solo cambio",
      ubicacion: "Xochimilco",
      precio:" 3 burros, una coca y un tlacuache" ,
      imagen: "../assets/6.jpg" ,
      cuartos: "1"
    },

    {
      id:6,
      nombre: "Castillo en venta",
      ubicacion: "Torreón",
      precio:"60,000,000" ,
      imagen: "../assets/7.jpg" ,
      cuartos: "69"
    },

    {
      id:7,
      nombre: "Casa grande en venta",
      ubicacion: "Bel Air",
      precio:"5,000,000" ,
      imagen: "../assets/8.jpg" ,
      cuartos: "7"
    },

    {
      id:8,
      nombre: "Casa en venta",
      ubicacion: "San José",
      precio:"10,000,000" ,
      imagen: "../assets/10.jpg" ,
      cuartos: "indefinido"
    },

    {
      id:9,
      nombre: "Casa en venta",
      ubicacion: "Morioh",
      precio:"1,000,000" ,
      imagen: "../assets/11.jpg" ,
      cuartos: "4"
    }
  ]
  clickCasa(c)
  {
    this.navCtrl.push(this.info,{casa:c, fav:this.fav });
  }

  clickFav()
  {
    this.navCtrl.push(this.favo,{fav:this.fav});
  }

}
