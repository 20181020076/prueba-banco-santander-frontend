import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ApiResponse, Character } from '../models/characters.models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly http = inject(HttpClient);
  private readonly urlBase = "https://rickandmortyapi.com/api"


  constructor() { 
  }


  fetch(page:number=1, searchName?:string, status?:string){

    let params = new HttpParams();
    if(page){
      params = params.set("page",page)
    }

    if(searchName){
      params = params.set("name",searchName)
    }
    if(status){
      params = params.set("status",status)
    }

    return this.http.get<ApiResponse>(this.urlBase +'/character',{params})
  }

  fetchById(value : number){
    let params = new HttpParams();
    params = params.set("id",value);
    
    return this.http.get<Character>(this.urlBase +`/character/`+value)
  }

}
