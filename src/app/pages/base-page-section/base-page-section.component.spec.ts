import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePageSectionComponent } from './base-page-section.component';

describe('BasePageSectionComponent', () => {
  let component: BasePageSectionComponent;
  let fixture: ComponentFixture<BasePageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasePageSectionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
