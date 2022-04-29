import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneratorContentDataPageComponent } from './generator-content-data-page.component';

describe('GeneratorContentDataPageComponent', () => {
  let component: GeneratorContentDataPageComponent;
  let fixture: ComponentFixture<GeneratorContentDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratorContentDataPageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorContentDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
