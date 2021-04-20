import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  recipeList = []

  constructor(private http: HttpClient) { }


  //Retruns list of recipies matching search term in form
  searchRecipes( searchTerm: string, dietSelection: string[], catagory: string, cuisine: string): Observable<any>{
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
  addSearch(newRecipes){
    this.recipeList = newRecipes
  }
}

