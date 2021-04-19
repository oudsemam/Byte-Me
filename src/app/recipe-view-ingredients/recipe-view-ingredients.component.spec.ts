import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewIngredientsComponent } from './recipe-view-ingredients.component';

describe('RecipeViewIngredientsComponent', () => {
  let component: RecipeViewIngredientsComponent;
  let fixture: ComponentFixture<RecipeViewIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeViewIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
