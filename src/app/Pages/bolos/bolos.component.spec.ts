import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosComponent } from './bolos.component';

describe('BolosComponent', () => {
  let component: BolosComponent;
  let fixture: ComponentFixture<BolosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BolosComponent]
    });
    fixture = TestBed.createComponent(BolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
