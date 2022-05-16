import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOperatorsComponent } from './home-operators.component';

describe('HomeOperatorsComponent', () => {
  let component: HomeOperatorsComponent;
  let fixture: ComponentFixture<HomeOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeOperatorsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
