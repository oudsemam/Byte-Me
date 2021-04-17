import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewNotesComponent } from './recipe-view-notes.component';

describe('RecipeViewNotesComponent', () => {
  let component: RecipeViewNotesComponent;
  let fixture: ComponentFixture<RecipeViewNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeViewNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
