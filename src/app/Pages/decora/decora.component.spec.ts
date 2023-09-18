import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoraComponent } from './decora.component';

describe('DecoraComponent', () => {
  let component: DecoraComponent;
  let fixture: ComponentFixture<DecoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoraComponent]
    });
    fixture = TestBed.createComponent(DecoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
