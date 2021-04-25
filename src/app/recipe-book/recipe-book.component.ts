import { Component, OnInit } from '@angular/core';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  faHeart = faHeart;
  faTrash = faTrash;
  recipeList: any[] | null = [];

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.recipeList = this.service.getRecipeBookListEvent();
    console.log(this.recipeList)
  }

  addRecipe (bucketEvent: any) {
    this.service.addRecipeBookListEvent(bucketEvent)
  }

  removeRecipe(bucketEvent: any){
    this.service.removeRecipeBookListEvent(bucketEvent);
  };
}
