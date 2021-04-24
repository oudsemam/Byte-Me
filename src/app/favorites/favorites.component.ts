import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { RecipeBookComponent } from '../recipe-book/recipe-book.component';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  faHeart = faHeart;
  toggle: boolean = false;
  status = 'Enable';
  recipeList: Observable<any> | null = null;

  constructor() {}

  ngOnInit(): void {}

  enableDisable() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    // if (!this.recipeList.recipebook){
    //   recipeList.recipebook = true;
    //   this.service.addRecipeBookListEvent(recipe);
    // } else if (this.recipeList.recipebook === true) {
    //   recipeList.recipebook = false;
    //   this.service.removeRecipeBookListEvent(recipe);
    // }
  }

}
