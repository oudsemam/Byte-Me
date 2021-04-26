import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { RecipeCardResult } from './recipe-card-result';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeList = []
  favoritesList: RecipeCardResult[] | null = [];
  viewRecipe = {}
  recipeUrl = null
  viewRecipeInstructions:any = []
  searchTerm = null
  private subject = new Subject<any>()
  constructor(private http: HttpClient) { }

  //Retruns list of recipies matching search term in form
  searchRecipes(
    searchTerm: string,
    dietSelection: string[],
    catagory: string,
    cuisine: string
  ): Observable<any> {
    let options = '';
    let catagoryInput = '';
    if (catagory != '') {
      catagoryInput = `&${catagory}`;

    }

    let cuisineInput = '';
    if (cuisine != '') {
      cuisineInput = `&${cuisine}`;
    }
    for (let option of dietSelection) {
      options += `&health=${option}`;
    }
    this.searchTerm = searchTerm
    return this.http.get(
      `https://api.edamam.com/search?q=${searchTerm}${options}${catagoryInput}${cuisineInput}&to=30&app_id=a8edfa33&app_key=b218030c46c79eea9911f87e1c55b759`
    );
  }
  addSearch(newRecipes) {
    this.recipeList = newRecipes;
  }

  getRecipeList() {
    return this.recipeList;
  }

  sendList(recipeList: any[]) {
    this.subject.next(recipeList);
  }

  getList(): Observable<any> {
    return this.subject.asObservable();
  }


  addRecipe(recipe){
    this.viewRecipe = recipe
    this.recipeUrl = recipe.recipe.url

  }
  getRecipe() {
    return this.viewRecipe;
  }

  getInstructions(){
    return this.http.get(`https://api.spoonacular.com/recipes/extract?url=${this.recipeUrl}&apiKey=1b25c3ebf1834020b5344d58e11f6d39`);
    
  }

  getRecipeBookList() {
    return this.favoritesList;
  }

  addRecipeBookListEvent(favorite) {
    this.favoritesList?.push(favorite);
    
  }

  removeRecipeBookListEvent(favorite){
    this.favoritesList?.splice(this.favoritesList?.indexOf(favorite));
  }

   notImplemented()  {
    throw new Error('Function not implemented.');
  }
}


