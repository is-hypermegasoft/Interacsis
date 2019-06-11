import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerComponent } from './gamer.component';

describe('GamerComponent', () => {
  let component: GamerComponent;
  let fixture: ComponentFixture<GamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
