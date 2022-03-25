import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentVisualDemoComponent } from './parent-visual-demo.component';

describe('ParentVisualDemoComponent', () => {
  let component: ParentVisualDemoComponent;
  let fixture: ComponentFixture<ParentVisualDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentVisualDemoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentVisualDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
