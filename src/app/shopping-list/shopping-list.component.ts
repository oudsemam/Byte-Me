import { Component, OnInit } from '@angular/core';
import {
  faPenSquare,
  faTrash,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  faPenSquare = faPenSquare;
  faTrash = faTrash;
  faPlus = faPlus;
  constructor() {}
  ngOnInit(): void {}
}
