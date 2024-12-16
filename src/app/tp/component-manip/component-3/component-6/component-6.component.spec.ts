import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component6Component } from './component-6.component';

describe('Component6Component', () => {
  let component: Component6Component;
  let fixture: ComponentFixture<Component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
