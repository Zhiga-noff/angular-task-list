import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldTaskComponent } from './form-field-task.component';

describe('FormFieldTaskComponent', () => {
  let component: FormFieldTaskComponent;
  let fixture: ComponentFixture<FormFieldTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldTaskComponent]
    });
    fixture = TestBed.createComponent(FormFieldTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
