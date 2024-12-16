import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentManipComponent } from './component-manip.component';

describe('ComponentManipComponent', () => {
  let component: ComponentManipComponent;
  let fixture: ComponentFixture<ComponentManipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentManipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentManipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
