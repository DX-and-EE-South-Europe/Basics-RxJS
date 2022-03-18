import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneratorContentComponent } from './generator-content.component';

describe('GeneratorContentComponent', () => {
  let component: GeneratorContentComponent;
  let fixture: ComponentFixture<GeneratorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratorContentComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
