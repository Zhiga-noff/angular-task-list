import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonControllerComponent } from './button-controller.component';

describe('ButtonControllerComponent', () => {
  let component: ButtonControllerComponent;
  let fixture: ComponentFixture<ButtonControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonControllerComponent]
    });
    fixture = TestBed.createComponent(ButtonControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
