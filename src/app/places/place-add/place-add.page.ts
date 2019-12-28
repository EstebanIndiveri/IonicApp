import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(
    private _placesService:PlacesService,
    private _router:Router
  ) { }

  ngOnInit() {
  }
  saveNewPlace(title:HTMLInputElement,imageUrl:HTMLInputElement){
    this._placesService.addPlace(title.value,imageUrl.value);
    this._router.navigate(['/places'])
  }
}
