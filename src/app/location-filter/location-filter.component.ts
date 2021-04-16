import { Component, OnInit, Input } from '@angular/core';
import { LocationFilter } from '../location-filter';

@Component({
  selector: 'app-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.css'],
})
export class LocationFilterComponent implements OnInit {
  @Input() location: LocationFilter | null = null;
  constructor() {}

  ngOnInit(): void {}
}
