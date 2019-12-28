import { Injectable } from '@angular/core';
import { Place } from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places:Place[]=[
    {
      id:'1',
      title:'Eifell Tower',
      imageUrl:'https://www.renfe-sncf.com/es-es/blog/PublishingImages/curiosidades-paris-torre-eiffel/curiosidades_paris_torre_eiffel.jpg',
      comments:['Awesome place','wonderul experience']
    },
    
    {
      id:'2',
      title:'Statue of Liberty',
      imageUrl:'https://www.turismonuevayork.com/wp-content/uploads/2012/08/Estatua-de-la-Libertad-02-681x1024.jpg',
      comments:['Awesome place','wonderul experience']
    },
    {
      id:'3',
      title:'Awesome Place',
      imageUrl:'https://www.turismonuevayork.com/wp-content/uploads/2012/08/Estatua-de-la-Libertad-02-681x1024.jpg',
      comments:['']
    }
    
    ]

  constructor() { }

  getplaces(){
    console.log(222)
    return [... this._places];
  }

  addPlace(title:string,imageUrl:string){
    this._places.push({
      title,
      imageUrl,
      comments:[],
      id:this._places.length + 1+""
    });
  }
  getPlace(placeID:string){
    return {
      ...this._places.find(place=>{
        return place.id === placeID
      })
    }
  }
  
  deletePlace(placeID:String){
    
   this._places=this._places.filter(place=>{
      return place.id !== placeID
    })
  }
}
