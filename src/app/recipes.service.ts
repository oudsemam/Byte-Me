import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { RecipeCardResult } from './recipe-card-result';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeList = [];
  favoritesList: RecipeCardResult[] | null = [];
  viewRecipe = {};
  private subject = new Subject<any>();
  constructor(private http: HttpClient) {}

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
    return this.http.get(
      `https://api.edamam.com/search?q=${searchTerm}${options}${catagoryInput}${cuisineInput}&to=30&app_id=a8edfa33&app_key=b218030c46c79eea9911f87e1c55b759`
    );
  }
  addSearch(newRecipes) {
    this.recipeList = newRecipes;
    console.log('added search');
  }

  getRecipeList() {
    console.log('getting recipe list');
    return this.recipeList;
  }

  sendList(recipeList: any[]) {
    this.subject.next(recipeList);
    console.log('sending list');
  }

  getList(): Observable<any> {
    console.log('getting list');
    return this.subject.asObservable();
  }

  addRecipe(recipe) {
    this.viewRecipe = recipe;
  }
  getRecipe() {
    return this.viewRecipe;
  }

  getRecipeBookList() {
    return this.favoritesList;
  }

  addRecipeBookListEvent(favorite) {
    this.favoritesList?.push(favorite);
    console.log(this.favoritesList);
  }

  removeRecipeBookListEvent(favorite){
    this.favoritesList?.splice(this.favoritesList?.indexOf(favorite));
  }
}

function recipe(recipe: any): any {
  throw new Error('Function not implemented.');
}

