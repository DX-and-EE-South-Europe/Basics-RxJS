import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutingComponent } from './executing.component';

describe('ExecutingComponent', () => {
  let component: ExecutingComponent;
  let fixture: ComponentFixture<ExecutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExecutingComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
