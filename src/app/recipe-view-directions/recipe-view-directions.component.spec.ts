import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewDirectionsComponent } from './recipe-view-directions.component';

describe('RecipeViewDirectionsComponent', () => {
  let component: RecipeViewDirectionsComponent;
  let fixture: ComponentFixture<RecipeViewDirectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeViewDirectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
