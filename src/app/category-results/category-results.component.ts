import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeCardResult } from '../recipe-card-result';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-category-results',
  templateUrl: './category-results.component.html',
  styleUrls: ['./category-results.component.css'],
})
export class CategoryResultsComponent implements OnInit, OnDestroy {
  sampleResults: RecipeCardResult[] = [
    {
      glutenFree: true,
      dairyFree: true,
      vegetarian: true,
      vegan: true,
      keto: true,
      name: 'Yogurt Cheescake',
      time: '40 mins',
      mealType: 'DESSERT',
      favorite: true,
    },
  ];
  result = null
  name: string | null = null

  recipeList: any[] | null = null
  subscription: Subscription;

  constructor(private service: RecipesService) { }

  ngOnInit(): void {
    this.recipeList = this.service.getRecipeList()
    this.name = this.service.searchTerm
    this.subscription = this.service.getList().subscribe(subject =>{
     console.log('subject')
      if (subject){
        this.recipeList = subject
      }else{
        this.recipeList = []
      }
    })
  }
  ngOnDestroy(){
    if(this.subscription)
    {this.subscription.unsubscribe()}
  }

}
