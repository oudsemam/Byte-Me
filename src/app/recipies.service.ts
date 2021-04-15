import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  constructor(private http: HttpClient) { }


  //Retruns list of recipies matching search term in form
  searchRecipiesByTerm(searchTerm: string){
    return this.http.get(`https://api.edamam.com/search?q=${searchTerm}&to=30&app_id=a8edfa33&app_key=b218030c46c79eea9911f87e1c55b759`)
  }
}
