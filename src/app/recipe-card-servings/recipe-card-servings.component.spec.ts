import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardServingsComponent } from './recipe-card-servings.component';

describe('RecipeCardServingsComponent', () => {
  let component: RecipeCardServingsComponent;
  let fixture: ComponentFixture<RecipeCardServingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardServingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardServingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
