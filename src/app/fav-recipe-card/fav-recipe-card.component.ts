import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-fav-recipe-card',
  templateUrl: './fav-recipe-card.component.html',
  styleUrls: ['./fav-recipe-card.component.css'],
})
export class FavRecipeCardComponent implements OnInit {
  @Input () recipe:any;
  id: string | null = '';
  favoriteRecipes: any[] | null;

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    console.log("favrecipecard", this.recipe)
    this.favoriteRecipes = this.service.getRecipeBookList();
  }

  removeEvent() {
    this.service.removeRecipeBookListEvent(this.favoriteRecipes);
  }
}
