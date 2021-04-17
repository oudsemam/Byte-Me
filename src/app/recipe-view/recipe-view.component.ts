import { Component, Input, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { RecipeCardResult } from '../recipe-card-result';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css'],
})
export class RecipeViewComponent implements OnInit {
  faClock = faClock;
  recipeTiming = [
    {
      type: 'Prep Time',
      amount: '10',
    },
    {
      type: 'Cook',
      amount: '30',
    },
    {
      type: 'Calories',
      amount: '540',
    },
  ];

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

  constructor() {}

  ngOnInit(): void {}
}
