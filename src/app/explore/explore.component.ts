import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipiesService } from '../recipies.service';
import { DietaryFilter } from '../dietary-filter';
import { CategoryFilter } from '../category-filter';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  recipies: Observable<any> | null = null;
  searchText: string = '';

  dietFilters: DietaryFilter[] = [
    {
      name: 'Gluten-free',
      initials: 'GF',
    },
    {
      name: 'Dairy-free',
      initials: 'DF',
    },
    {
      name: 'Vegan',
      initials: 'V',
    },
    {
      name: 'Vegetarian',
      initials: 'VG',
    },
    {
      name: 'Keto',
      initials: 'K',
    },
  ];

  categoryFilter: CategoryFilter[] = [
    {
      icon: 'lemon',
      name: 'Drinks',
    },
    {
      icon: 'chicken',
      name: 'Lunch',
    },
    {
      icon: 'ice-cream',
      name: 'Desserts',
    },
    {
      icon: 'apple',
      name: 'Snacks',
    },
    {
      icon: 'bacon',
      name: 'Breakfast',
    },
    {
      icon: 'cheese',
      name: 'Appetizers',
    },
  ];

  constructor(private service: RecipiesService) {}

  ngOnInit(): void {}

  searchByTerm() {
    this.recipies = this.service.searchRecipiesByTerm(this.searchText);
  }
}
