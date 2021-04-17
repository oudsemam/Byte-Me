import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardTimeComponent } from './recipe-card-time.component';

describe('RecipeCardTimeComponent', () => {
  let component: RecipeCardTimeComponent;
  let fixture: ComponentFixture<RecipeCardTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
