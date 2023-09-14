import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails =[
    {
      id:1,
      foodName:"Casamento feliz festas",
      foodDetails:"Com piscina área de lazer e playground kids.",
      foodPrice:4300,
      foodImg:"https://images.pexels.com/photos/15139017/pexels-photo-15139017/free-photo-of-celebracao-comemoracao-festa-decoracao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id:2,
      foodName:"Casamento imperial",
      foodDetails:"Buffet completo para 100 pessoas com escolha de pratos e decorações, sala vip e salão de jogos.",
      foodPrice:35000,
      foodImg:"https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },


    {
      id:3,
      foodName:"Clube de campo casamentos e festas",
      foodDetails:"Com salão de jogos e área de lazer com piscina e campo de futebol.",
      foodPrice:3500,
      foodImg:"https://media.istockphoto.com/id/1023131030/pt/foto/an-aerial-view-of-houses-of-a-gated-community.jpg?s=1024x1024&w=is&k=20&c=RFgOOTj93gaQji_gE-Imf-vGBEyWBa0-J1233DAH-mA=",
    },


    {
    id:4,
      foodName:"Casamento a moda antiga",
      foodDetails:"Somente o Salão de Festa com a decoração.",
      foodPrice:2500,
      foodImg:"https://media.istockphoto.com/id/467933838/pt/foto/casamento-das-chamin%C3%A9s.jpg?s=2048x2048&w=is&k=20&c=u9wYwrNBXv5Otuv4YExiL4497p7XzgsjvMLLHeIyCYM=",
    },


  ]
}
