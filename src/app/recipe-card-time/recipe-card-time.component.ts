import { Component, Input, OnInit } from '@angular/core';

import { RecipeCardTime } from '../recipe-card-time';

@Component({
  selector: 'app-recipe-card-time',
  templateUrl: './recipe-card-time.component.html',
  styleUrls: ['./recipe-card-time.component.css'],
})
export class RecipeCardTimeComponent implements OnInit {
  @Input() time: RecipeCardTime | null = null;

  constructor() {}

  ngOnInit(): void {}
}
