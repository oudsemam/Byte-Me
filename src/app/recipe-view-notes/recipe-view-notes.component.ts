import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-view-notes',
  templateUrl: './recipe-view-notes.component.html',
  styleUrls: ['./recipe-view-notes.component.css'],
})
export class RecipeViewNotesComponent implements OnInit {
  @Input() note: string = '';
  newNote: string;
  addedNotes: string[] = [];
  faTimes = faTimes;

  addNote() {
    if (this.newNote !== null) {
      this.addedNotes?.push(this.newNote);
    }
    this.newNote = '';
  }

  removeNote(i: number) {
    this.addedNotes.splice(i, 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
