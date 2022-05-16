import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDemoComponent } from './visual-demo.component';

describe('VisualDemoComponent', () => {
  let component: VisualDemoComponent;
  let fixture: ComponentFixture<VisualDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualDemoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
