import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposingComponent } from './disposing.component';

describe('DisposingComponent', () => {
  let component: DisposingComponent;
  let fixture: ComponentFixture<DisposingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisposingComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
