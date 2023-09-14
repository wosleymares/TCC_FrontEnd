import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.component.html',
  styleUrls: ['./criar-anuncio.component.scss'],

})
export class CriarAnuncioComponent {
  form!: FormGroup;
  private formAnunciar!: boolean;

fb = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', [Validators.required, Validators.email]],
      contato:['',Validators.required]
    })
  }

}
