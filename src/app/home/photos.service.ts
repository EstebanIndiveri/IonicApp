import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  
  constructor(
    private _http:HttpClient
  ) { }

  getPhotos():any{
    return this._http.get('https://jsonplaceholder.typicode.com/photos?_limit=15')
  }
}
