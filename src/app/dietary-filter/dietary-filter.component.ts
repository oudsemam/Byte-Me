import { Component, OnInit, Input } from '@angular/core';
import { DietaryFilter } from '../dietary-filter';

@Component({
  selector: 'app-dietary-filter',
  templateUrl: './dietary-filter.component.html',
  styleUrls: ['./dietary-filter.component.css'],
})
export class DietaryFilterComponent implements OnInit {
  @Input() diet: DietaryFilter | null = null;

  onClick() {
    if (this.diet.clicked === true) {
      this.diet.clicked = false;
    } else if (this.diet.clicked === false) {
      this.diet.clicked = true;
    }
    console.log(`${this.diet.name} ${this.diet.clicked}`);
  }

  constructor() {}

  ngOnInit(): void {}
}
