import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private _http:HttpClient
  ) { }

  getMenu():Observable<menu[]>{
    return this._http.get<menu[]>('./assets/data/menu.json')
  }
}
