import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RecipesService } from '../recipes.service';
import { RecipeCardResult } from '../recipe-card-result';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  @Input() favorite: RecipeCardResult | null = null;
  faHeart = faHeart;
  toggle: boolean;
  status = 'Enable';
  event: Event[] = [];

  constructor(private service: RecipesService) {}

  ngOnInit(): void {}

  enableDisable() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  saveRecipe(recipeItem: any) {
    this.enableDisable();
    if (!recipeItem.favorite) {
      recipeItem.favorite = true;
      this.service.addRecipeBookListEvent();
    } else if (recipeItem.favorite === true) {
      recipeItem.favorite = false;
      this.service.removeRecipeBookListEvent();
    }
    console.log(this.service.addRecipeBookListEvent)
  }
}
