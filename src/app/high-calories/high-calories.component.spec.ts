import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighCaloriesComponent } from './high-calories.component';

describe('HighCaloriesComponent', () => {
  let component: HighCaloriesComponent;
  let fixture: ComponentFixture<HighCaloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighCaloriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighCaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
