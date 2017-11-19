import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowCaloriesComponent } from './low-calories.component';

describe('LowCaloriesComponent', () => {
  let component: LowCaloriesComponent;
  let fixture: ComponentFixture<LowCaloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowCaloriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowCaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
