import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeList = []
  viewRecipe = {}
  recipeUrl = null
  viewRecipeInstructions:any = []
  private subject = new Subject<any>()
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
    console.log('added search')
  }

  getRecipeList(){
    console.log('getting recipe list')
    return this.recipeList
  }

  sendList(recipeList: any[]){
    this.subject.next(recipeList)
    console.log('sending list')
  }

  getList(): Observable<any>{
    console.log('getting list')
    return this.subject.asObservable()
  }
  
  addRecipe(recipe){
    this.viewRecipe = recipe
    this.recipeUrl = recipe.recipe.url
  }
  getRecipe(){
    return this.viewRecipe
  }
  getInstructions(){
    return this.http.get(`https://api.spoonacular.com/recipes/extract?url=${this.recipeUrl}&apiKey=6374b9f8f50a4a0580c1689b595b5aba`)
  }
}

