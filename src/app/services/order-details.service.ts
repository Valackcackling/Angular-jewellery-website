import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"CZ Finger Ring",
      foodDetails:"Enrich Your Attire with this beautiful pair of Rose Gold-Plated CZ dangler Earrings. Each piece is studded with dazzling White American Diamonds.",
      foodPrice:200,
      foodImg:"../assets/img/j1.webp"
    },
    {
      id:2,
      foodName:"CZ Mangtikka",
      foodDetails:"Enrich Your Attire with this beautiful pair of Rose Gold-Plated CZ dangler Earrings. Each piece is studded with dazzling White American Diamonds.",
      foodPrice:369,
      foodImg:"../assets/img/j2.webp"
    },
    {
      id:3,
      foodName:"Chandbutta Earring",
      foodDetails:"Enrich Your Attire with this beautiful pair of Rose Gold-Plated CZ dangler Earrings. Each piece is studded with dazzling White American Diamonds.",
      foodPrice:149,
      foodImg:"../assets/img/j3.webp"
    },
    {
      id:4,
      foodName:"CZ Drop Earring",
      foodDetails:"Enrich Your Attire with this beautiful pair of Rose Gold-Plated CZ dangler Earrings. Each piece is studded with dazzling White American Diamonds.",
      foodPrice:140,
      foodImg:"../assets/img/j4.webp"
    },
    {
      id:5,
      foodName:"CZ Chandbali Earring",
      foodDetails:"Enrich Your Attire with this beautiful pair of Rose Gold-Plated CZ dangler Earrings. Each piece is studded with dazzling White American Diamonds.",
      foodPrice:105,
      foodImg:"../assets/img/j5.webp"
    },
    {
      id:6,
      foodName:"CZ Dangelor Earring",
      foodDetails:"Enrich Your Attire with this beautiful pair of Rose Gold-Plated CZ dangler Earrings. Each piece is studded with dazzling White American Diamonds.",
      foodPrice:219,
      foodImg:"../assets/img/j6.webp"
    }
  ]


  

}
