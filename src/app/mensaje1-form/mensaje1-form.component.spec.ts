import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensaje1FormComponent } from './mensaje1-form.component';

describe('Mensaje1FormComponent', () => {
  let component: Mensaje1FormComponent;
  let fixture: ComponentFixture<Mensaje1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mensaje1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensaje1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
