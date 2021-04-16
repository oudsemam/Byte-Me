import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryFilterComponent } from './dietary-filter.component';

describe('DietaryFilterComponent', () => {
  let component: DietaryFilterComponent;
  let fixture: ComponentFixture<DietaryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietaryFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
