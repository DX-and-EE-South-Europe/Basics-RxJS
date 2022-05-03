import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnatomyObsComponent } from './home-anatomy-obs.component';

describe('HomeAnatomyObsComponent', () => {
  let component: HomeAnatomyObsComponent;
  let fixture: ComponentFixture<HomeAnatomyObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAnatomyObsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnatomyObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
