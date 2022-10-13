import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
//get food by id

getFoodById(id:number):Foods{
  return this.getAll().find(food => food.id == id)!;
}



  //get all tags
  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));

    // if(tag=='All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));
  }

getAllTag():Tag[]{
return[
  {name:'All',count:8},
  {name:'indian',count:1},
  {name:'Fastfood',count:2},
  {name:'chaina',count:1},
  {name:'Pizza',count:1},
  {name:'Burgger',count:1},
  {name:'lunch',count:1},
  {name:'slowfood',count:1},
]
}



  //get all images
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'ICE creame',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['presia', 'china'],
        star: 4.7,
        imageUrl: '/assets/1.jpg',
        tags: ['indian'],
      },
      {
        id: 2,
        name: 'Burgger',
        price: 30,
        cookTime: '20-40',
        favorite: true,
        origins: ['indian'],
        star: 4,
        imageUrl: '/assets/2.jpg',
        tags: ['slowfood'],
      },
      {
        id: 3,
        name: 'pavbhaji',
        price: 50,
        cookTime: '40-50',
        favorite: true,
        origins: ['indian'],
        star: 4,
        imageUrl: '/assets/3.jpg',
        tags: ['lunch'],
      },
      {
        id: 4,
        name: 'frenchburgger',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['presia', 'china'],
        star: 3,
        imageUrl: '/assets/4.jpg',
        tags: ['Burgger'],
      },
      {
        id: 5,
        name: 'pizza',
        price: 100,
        cookTime: '20-30',
        favorite: true,
        origins: ['indian', 'middle east'],
        star: 2,
        imageUrl: '/assets/5.jpg',
        tags: ['Fastfood'],
      },
      {
        id: 6,
        name: 'Chizpiizza',
        price: 200,
        cookTime: '20-30',
        favorite: true,
        origins: ['china'],
        star: 4.7,
        imageUrl: '/assets/6.jpg',
        tags: ['Pizza'],
      },
      {
        id: 7,
        name: 'Pestry',
        price: 250,
        cookTime: '20-30',
        favorite: true,
        origins: ['middle east'],
        star: 4.7,
        imageUrl: '/assets/7.jpg',
        tags: ['Fastfood'],
      },
      {
        id: 8,
        name: 'veg burgger',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['presia', 'middle east', 'china'],
        star: 4.7,
        imageUrl: '/assets/8.jpg',
        tags: [ 'chaina'],
      },
    ];
  }
}
