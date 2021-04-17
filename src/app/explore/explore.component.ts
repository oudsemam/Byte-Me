import { Component, OnInit } from '@angular/core';
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
      icon: faLemon,
      name: 'Drinks',
    },
    {
      icon: faDrumstickBite,
      name: 'Lunch',
    },
    {
      icon: faIceCream,
      name: 'Desserts',
    },
    {
      icon: faAppleAlt,
      name: 'Snacks',
    },
    {
      icon: faBacon,
      name: 'Breakfast',
    },
    {
      icon: faCheese,
      name: 'Appetizers',
    },
  ];

  locationFilter: LocationFilter[] = [
    {
      location: 'American',
    },
    {
      location: 'Asian',
    },
    {
      location: 'British',
    },
    {
      location: 'Caribbean',
    },
    {
      location: 'Central Europe',
    },
    {
      location: 'Chinese',
    },
    {
      location: 'Eastern Europe',
    },
    {
      location: 'French',
    },
    {
      location: 'Indian',
    },
    {
      location: 'Italian',
    },
    {
      location: 'Japanese',
    },
    {
      location: 'Kosher',
    },
    {
      location: 'Mediterranean',
    },
    {
      location: 'Mexican',
    },
    {
      location: 'Middle Eastern',
    },
    {
      location: 'Nordic',
    },
    {
      location: 'South American',
    },
    {
      location: 'South East Asian',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
