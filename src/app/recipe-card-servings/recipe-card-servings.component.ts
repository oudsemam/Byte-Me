import { Component, Input, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-card-servings',
  templateUrl: './recipe-card-servings.component.html',
  styleUrls: ['./recipe-card-servings.component.css'],
})
export class RecipeCardServingsComponent implements OnInit {
  faUser = faUser;
  @Input() serving: number | null = null
  constructor() {}

  ngOnInit(): void {}
}
