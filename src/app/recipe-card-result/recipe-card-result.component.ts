import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RecipeCardResult } from '../recipe-card-result';

@Component({
  selector: 'app-recipe-card-result',
  templateUrl: './recipe-card-result.component.html',
  styleUrls: ['./recipe-card-result.component.css'],
})
export class RecipeCardResultComponent implements OnInit {
  @Input() recipeResults: RecipeCardResult | null = null;
  @Input() result = null;

  faHeart = faHeart;
  toggle: boolean = false;
  status = 'Enable';

  constructor() {}

  ngOnInit(): void {}

  favorite() {}

  enableDisable() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
};