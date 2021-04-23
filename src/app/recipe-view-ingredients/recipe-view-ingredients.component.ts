import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RecipeViewIngredients } from '../recipe-view-ingredients';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-view-ingredients',
  templateUrl: './recipe-view-ingredients.component.html',
  styleUrls: ['./recipe-view-ingredients.component.css'],
})
export class RecipeViewIngredientsComponent implements OnInit {
  @Input() ingredient: string | null = null;
  faPlus = faPlus;
  
  constructor() {}

  ngOnInit(): void {

  }
}
