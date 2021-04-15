import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  constructor(private http: HttpClient) { }


  //Retruns list of recipies matching search term in form
  searchRecipies( searchTerm: string, dietSelection: string[], catagory: string, cuisine: string){
    let options = ""
    let catagoryInput = ""
    if(catagory != ""){let catagoryInput = `&${catagory}`}

    let cuisineInput = ""
    if(cuisine!= ""){
      cuisineInput = `&${cuisine}`
    }
    for(let option of dietSelection){
      options += `&health=${option}`
    }
    return this.http.get(`https://api.edamam.com/search?q=${searchTerm}${options}${catagoryInput}${cuisineInput}&to=30&app_id=a8edfa33&app_key=b218030c46c79eea9911f87e1c55b759`)
  }
}

