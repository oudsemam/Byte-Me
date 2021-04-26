import { Component, Input, OnInit } from '@angular/core';
import { RecipeViewDirections } from '../recipe-view-directions';

@Component({
  selector: 'app-recipe-view-directions',
  templateUrl: './recipe-view-directions.component.html',
  styleUrls: ['./recipe-view-directions.component.css'],
})
export class RecipeViewDirectionsComponent implements OnInit {
  @Input() direction = null;
  // @Input() i: number = 1;

  constructor() {}

  ngOnInit(): void {
   
  }
}
