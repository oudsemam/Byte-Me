import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipiesService } from '../recipies.service';
import { DietaryFilter } from '../dietary-filter';
import { CategoryFilter } from '../category-filter';
import { LocationFilter } from '../location-filter';
import {
  faAppleAlt,
  faBacon,
  faCheese,
  faDrumstickBite,
  faIceCream,
  faLemon,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  recipies: Observable<any> | null = null;
  searchText: string = '';
  faCheese = faCheese;
  faDrumstickBite = faDrumstickBite;
  faLemon = faLemon;
  faIceCream = faIceCream;
  faAppleAlt = faAppleAlt;
  faBacon = faBacon;

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
      icon: 'faLemon',
      name: 'Drinks',
    },
    {
      icon: 'faDrumstickBite',
      name: 'Lunch',
    },
    {
      icon: 'faIceCream',
      name: 'Desserts',
    },
    {
      icon: 'faAppleAlt',
      name: 'Snacks',
    },
    {
      icon: 'faBacon',
      name: 'Breakfast',
    },
    {
      icon: 'faCheese',
      name: 'Appetizers',
    },
  ];

  locationFilter: LocationFilter[] = [
    {
      location: 'Indian',
    },
    {
      location: 'Italian',
    },
    {
      location: 'Asian',
    },
    {
      location: 'Mexican',
    },
  ];

  constructor(private service: RecipiesService) {}

  ngOnInit(): void {}

  searchByTerm() {
    this.recipies = this.service.searchRecipiesByTerm(this.searchText);
  }
}
