import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  allpopular: any[] = [];
  allCategory: any[] = [];
  alldrink: any[] = [];
  constructor()
  {
    this.allpopular = [
      {
        id: 1,
        title: 'Chicken',
        subtitle: 'Some data about chicken',
        image: '../../../assets/chicken.jpg',
        price: 150
      },

      {
        id: 2,
        title: 'Burger',
        subtitle: 'Some data about Burger',
        image: '../../../assets/burger.jpeg',
        price: 50
      },

      {
        id: 3,
        title: 'Fish',
        subtitle: 'Some data about Fish',
        image: '../../../assets/fish.jpeg',
        price: 50
      },

      {
        id: 4,
        title: 'Thali',
        subtitle: 'Some data about Thali',
        image: '../../../assets/thali.jpg',
        price: 50
      },

      {
        id: 5,
        title: 'Patty',
        subtitle: 'Some data about Patty',
        image: '../../../assets/patty.jpeg',
        price: 50
      }
    ]
  
    this.allCategory = [
      {
        id: 1,
        title: 'Food',
        subtitle: 'Some data',
        image: '../../../assets/burger.svg',
        price: 150,
        bgcolor: "#bf3242"
      },

      {
        id: 2,
        title: 'Drink',
        subtitle: 'Some data',
        image: '../../../assets/cocktail.svg',
        price: 50,
        bgcolor: "#2962d5"
      },

      {
        id: 3,
        title: 'Burger',
        subtitle: 'Some data',
        image: '../../../assets/dish.svg',
        price: 50,
        bgcolor: "#cb7f07"
      },

      {
        id: 4,
        title: 'Pizza',
        subtitle: 'Some data',
        image: '../../../assets/cookies.svg',
        price: 50,
        bgcolor: "#2acd65"
      },

      {
        id: 5,
        title: 'Mexican',
        subtitle: 'Some data',
        image: '../../../assets/noodle.svg',
        price: 50,
        bgcolor: "#4a54ff"
      },

      {
        id: 6,
        title: 'Desert',
        subtitle: 'Some data',
        image: '../../../assets/pizza.svg',
        price: 50,
        bgcolor: "#e73c50"
      },

      {
        id: 7,
        title: 'Noodle',
        subtitle: 'Some data',
        image: '../../../assets/taco.svg',
        price: 50,
        bgcolor: "#37baff"
      }
    ]

    this.alldrink = [
      {
        id: 1,
        title: 'Alcohol',
        subtitle: 'Some data',
        image: '../../../assets/alcohol.jpg',
        price: 150
      },

      {
        id: 2,
        title: 'Coffee',
        subtitle: 'Some data',
        image: '../../../assets/coffee.webp',
        price: 50
      },

      {
        id: 3,
        title: 'Cold Drink',
        subtitle: 'Some data',
        image: '../../../assets/cold.jpeg',
        price: 50
      },

      {
        id: 4,
        title: 'Lemonade',
        subtitle: 'Some data',
        image: '../../../assets/lemonade.jpg',
        price: 50
      },

      {
        id: 5,
        title: 'Shake',
        subtitle: 'Some data',
        image: '../../../assets/shake.webp',
        price: 50
      }
    ]
  }

  getpopularData()
  {
    return this.allpopular;
  }

  getcategorydata()
  {
    return this.allCategory;
  }

  getdrinkdata()
  {
    return this.alldrink;
  }
}
