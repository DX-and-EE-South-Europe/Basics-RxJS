import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFunctionsComponent } from './home-functions.component';

describe('HomeFunctionsComponent', () => {
  let component: HomeFunctionsComponent;
  let fixture: ComponentFixture<HomeFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFunctionsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
