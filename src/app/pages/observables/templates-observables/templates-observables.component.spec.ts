import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesObservablesComponent } from './templates-observables.component';

describe('TemplatesObservablesComponent', () => {
  let component: TemplatesObservablesComponent;
  let fixture: ComponentFixture<TemplatesObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesObservablesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
