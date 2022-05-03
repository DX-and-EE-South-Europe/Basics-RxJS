import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMulticastedObsComponent } from './home-multicasted-obs.component';

describe('HomeMulticastedObsComponent', () => {
  let component: HomeMulticastedObsComponent;
  let fixture: ComponentFixture<HomeMulticastedObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMulticastedObsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMulticastedObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
