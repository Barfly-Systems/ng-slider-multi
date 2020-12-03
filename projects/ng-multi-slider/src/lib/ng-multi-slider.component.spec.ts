import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMultiSliderComponent } from './ng-multi-slider.component';

describe('NgMultiSliderComponent', () => {
  let component: NgMultiSliderComponent;
  let fixture: ComponentFixture<NgMultiSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMultiSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMultiSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
