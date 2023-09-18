import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/models/anuncio.model';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-criar-anuncio',
  templateUrl: './criar-anuncio.component.html',
  styleUrls: ['./criar-anuncio.component.scss'],

  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ]
})
export class CriarAnuncioComponent {

  newProduct: Product = new Product();

  formProduct!: FormGroup;

  private formSubmited!: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private popupService: PopupService) {

      this.formProduct = this.fb.group({
        id: [''],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      telefone: ['', Validators.required],
      imgUrl: ['', Validators.required],

    })
  }

  salvarDados(){
    if (this.formProduct.valid){
      const dados = this.formProduct.value;

      //Enviar dados para API usando HttpClient
      this.http.post('http://localhost:8080/anuncios',dados).subscribe(response =>(
        //Tratando a resposta da API,se necessário
        console.log('Dados enviados com sucesso', response)));
        //popup cadastro realizado
        this.popupService.abrirPopUp();
        //Após o envio reseta o form e volta para Login
        this.formProduct.reset();

        this.router.navigate(['/lista-anuncios']);

      } (error: any) => {
        //Lidar com erros, se houver algum
        console.error('Erro ao enviar os dados', error);
      };

    }

    isFieldInvalid(field: any) {

      return (
        (!this.formProduct.get(field)?.valid && this.formProduct.get(field)?.touched) ||
        (this.formProduct.get(field)?.untouched && this.formSubmited)
      );
    }
}
