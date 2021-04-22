import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-view-notes',
  templateUrl: './recipe-view-notes.component.html',
  styleUrls: ['./recipe-view-notes.component.css'],
})
export class RecipeViewNotesComponent implements OnInit {
  @Input() note: string = '';
  newNote: string;
  addedNotes: string[] = [];

  addNote() {
    if (this.newNote !== null) {
      this.addedNotes?.push(this.newNote);
    }
    this.newNote = '';
  }

  removeNote(note: string) {
    this.addedNotes?.splice(this.addedNotes?.indexOf(note), 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
