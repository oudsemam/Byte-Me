import { Component, OnInit } from '@angular/core';
import { RecipeCardResult } from '../recipe-card-result';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
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

  recipeList: any[] | null = null

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.recipeList = this.service.getRecipeList()
  }
}
