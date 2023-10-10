import { Component } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {
  foodlist:any=[];
  constructor(){
    this.foodlist=[
      {
        "id": "the-gramercy-tavern-burger-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Gramercy Tavern",
        "dsc": "The Gramercy Tavern Burger - 4 Pack",
        "price": 99,
        "rate": 5,
        "country": "New York, NY"
      },
      {
        "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Peter Luger Steak House",
        "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
        "price": 175.95,
        "rate": 4,
        "country": "Brooklyn, NY"
      },
      {
        "id": "goldbelly-burger-blend-4-lbs",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96214/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Flannery Beef",
        "dsc": "Goldbelly Burger Blend - 4 lbs.",
        "price": 79,
        "rate": 5,
        "country": "San Rafael, CA"
      }]
  }

}
