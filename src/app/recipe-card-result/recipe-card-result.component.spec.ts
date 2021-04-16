import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardResultComponent } from './recipe-card-result.component';

describe('RecipeCardResultComponent', () => {
  let component: RecipeCardResultComponent;
  let fixture: ComponentFixture<RecipeCardResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
