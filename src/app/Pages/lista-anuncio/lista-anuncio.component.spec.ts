import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnuncioComponent } from './lista-anuncio.component';

describe('ListaAnuncioComponent', () => {
  let component: ListaAnuncioComponent;
  let fixture: ComponentFixture<ListaAnuncioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAnuncioComponent]
    });
    fixture = TestBed.createComponent(ListaAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
