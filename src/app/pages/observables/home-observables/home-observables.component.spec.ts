import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeObservablesComponent } from './home-observables.component';

describe('HomeObservablesComponent', () => {
  let component: HomeObservablesComponent;
  let fixture: ComponentFixture<HomeObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeObservablesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
