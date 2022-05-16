import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesAnatomyComponent } from './templates-anatomy.component';

describe('TemplatesAnatomyComponent', () => {
  let component: TemplatesAnatomyComponent;
  let fixture: ComponentFixture<TemplatesAnatomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesAnatomyComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesAnatomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
