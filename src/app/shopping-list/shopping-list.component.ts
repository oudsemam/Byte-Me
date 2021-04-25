import { Component, Input, OnInit } from '@angular/core';
import {
  faPenSquare,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  faPenSquare = faPenSquare;
  faTimes = faTimes;
  faPlus = faPlus;

  @Input() note: string = '';
  newListItem: string;
  shoppingList: string[] = [];

  addListItem() {
    if (this.newListItem !== null) {
      this.shoppingList?.push(this.newListItem);
    }
    this.newListItem = '';
  }

  removeListItem(i: number) {
    this.shoppingList?.splice(i, 1);
  }
  constructor() {}
  ngOnInit(): void {}
}
