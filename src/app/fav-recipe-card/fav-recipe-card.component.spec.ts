import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavRecipeCardComponent } from './fav-recipe-card.component';

describe('FavRecipeCardComponent', () => {
  let component: FavRecipeCardComponent;
  let fixture: ComponentFixture<FavRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavRecipeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
