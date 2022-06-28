import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingObservableComponent } from './creating-observable.component';

describe('CreatingObservableComponent', () => {
  let component: CreatingObservableComponent;
  let fixture: ComponentFixture<CreatingObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatingObservableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
