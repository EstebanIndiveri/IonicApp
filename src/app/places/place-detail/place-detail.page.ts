import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Route } from '@angular/compiler/src/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  public place:Place;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _placesService:PlacesService,
    private _router:Router,
    private _alert:AlertController
  ) { }

  ngOnInit() {
  this._activatedRoute.paramMap.subscribe(
    paramMap=>{
      if(!paramMap){
        console.log('error');
      }
      const recipeID = paramMap.get('placeId')
      this.place=this._placesService.getPlace(recipeID);
      console.log(this.place);
  })
  }
  async deletePlace(){

    const alertElement = await this._alert.create({
      header:'¿Estas seguro de eliminar?',
      message:'El articulo se eliminará si continuas',
      buttons:[{
        text:'Cancelar',
        role:'cancel'
      },
      {
        text:'Eliminar',
        handler:()=>{
          this._placesService.deletePlace(this.place.id);
          this._router.navigate(['/places'])
        }
      }
    
    ]
      
  });
  await alertElement.present();


    
  }

}
