import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaEmpresaComponent } from './conta-empresa.component';

describe('ContaEmpresaComponent', () => {
  let component: ContaEmpresaComponent;
  let fixture: ComponentFixture<ContaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContaEmpresaComponent]
    });
    fixture = TestBed.createComponent(ContaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
