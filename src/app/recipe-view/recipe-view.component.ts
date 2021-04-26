import { Component, Input, OnInit } from '@angular/core';
import {
  faClock,
  faExternalLinkAlt,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { RecipeCardResult } from '../recipe-card-result';
import { RecipeViewDirections } from '../recipe-view-directions';
import { RecipeViewIngredients } from '../recipe-view-ingredients';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css'],
})
export class RecipeViewComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;
  faPrint = faPrint;
  faClock = faClock;
  // recipeTiming = [
  //   {
  //     type: 'Prep Time',
  //     amount: '10',
  //   },
  //   {
  //     type: 'Cook',
  //     amount: '30',
  //   },
  //   {
  //     type: 'Calories',
  //     amount: '540',
  //   },
  // ];

  // sampleResults: RecipeCardResult[] = [
  //   {
  //     glutenFree: true,
  //     dairyFree: true,
  //     vegetarian: true,
  //     vegan: true,
  //     keto: true,
  //     name: 'Yogurt Cheescake',
  //     time: '40 mins',
  //     mealType: 'DESSERT',
  //     favorite: true,
  //   },
  // ];
  // sampleIngredientList: RecipeViewIngredients[] = [
  //   {
  //     measurement: '1/4 Cup',
  //     ingredient: 'Flour',
  //   },
  //   {
  //     measurement: '1/2 Cup',
  //     ingredient: 'Milk',
  //   },
  //   {
  //     measurement: '2 Cups',
  //     ingredient: 'Plain Flour',
  //   },
  //   {
  //     measurement: '1/4 Cup',
  //     ingredient: 'Caster Sugar',
  //   },
  // ];

  // sampleDirection: RecipeViewDirections[] = [
  //   {
  //     direction: 'Fold in the Cheese',
  //   },
  //   {
  //     direction: 'David, fold in the Cheese',
  //   },
  //   {
  //     direction: 'Just fold in the Cheese, David',
  //   },
  //   {
  //     direction: 'DAVID!',
  //   },
  // ];
  recipe = null;
  instructions: Observable<any> = null;
  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.recipe = this.service.getRecipe();
    this.instructions = this.service.getInstructions();
  }
}
