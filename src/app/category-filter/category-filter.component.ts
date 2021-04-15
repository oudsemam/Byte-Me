import { Component, OnInit, Input } from '@angular/core';
import { CategoryFilter } from '../category-filter';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css'],
})
export class CategoryFilterComponent implements OnInit {
  @Input() category: CategoryFilter | null = null;
  constructor() {}

  ngOnInit(): void {}
}
