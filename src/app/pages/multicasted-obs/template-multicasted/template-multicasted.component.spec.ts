import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMulticastedComponent } from './template-multicasted.component';

describe('TemplateMulticastedComponent', () => {
  let component: TemplateMulticastedComponent;
  let fixture: ComponentFixture<TemplateMulticastedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateMulticastedComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMulticastedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
