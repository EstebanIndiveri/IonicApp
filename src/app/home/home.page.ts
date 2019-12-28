import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public photos:any[];
  constructor(
    private _photosService:PhotosService
  ) {}

  ngOnInit(){
    this._photosService.getPhotos().subscribe(data=>{
      this.photos=data;
    })
  }
}
