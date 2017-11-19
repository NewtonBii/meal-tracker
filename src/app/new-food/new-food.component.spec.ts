import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoodComponent } from './new-food.component';

describe('NewFoodComponent', () => {
  let component: NewFoodComponent;
  let fixture: ComponentFixture<NewFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
