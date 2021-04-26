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
  @Input() favorite: any;
  faHeart = faHeart;
  toggle: boolean;
  status = 'Enable';
  favoriteList:any = [];

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.favoriteList = this.service.getRecipeBookList();
    this.toggle = this.isFavorited(this.favorite.recipe.uri);
  }

  enableDisable() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  saveRecipe(recipeItem: any) {
    this.enableDisable();
    if (!recipeItem.favorite) {
      recipeItem.favorite = true;
      this.service.addRecipeBookListEvent(this.favorite.recipe);
    } else if (recipeItem.favorite === true) {
      recipeItem.favorite = false;
      this.service.removeRecipeBookListEvent(this.favorite.recipe);
    }
    console.log(this.service.favoritesList)
  }

  isFavorited(uri){
    let foundItem = this.favoriteList.find(item=> item.uri === uri);
    if (foundItem){
      return true;
    }
    return false;
  }
}
