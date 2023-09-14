import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioPageComponent } from './anuncio-page.component';

describe('AnuncioPageComponent', () => {
  let component: AnuncioPageComponent;
  let fixture: ComponentFixture<AnuncioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnuncioPageComponent]
    });
    fixture = TestBed.createComponent(AnuncioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
