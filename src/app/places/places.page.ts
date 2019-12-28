import { Component, OnInit } from '@angular/core';
import { PlacesService } from "./places.service";
import { Route,Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

 public places=[];

  constructor(
    private _placeService:PlacesService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.places=this._placeService.getplaces();
    console.log(this.places);
  }
  ionViewWillEnter(){
    this.places=this._placeService.getplaces();
    console.log(this.places);
  }
  addNewPlace(){
    this._router.navigate(['/new-place']);
    
  }
  goToHome(){
    this._router.navigate(['/home']);
  }
}
