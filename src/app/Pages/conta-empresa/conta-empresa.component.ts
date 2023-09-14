import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-conta-empresa',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule,MatFormFieldModule],
  templateUrl: './conta-empresa.component.html',
  styleUrls: ['./conta-empresa.component.scss']
})
export class ContaEmpresaComponent{

  formEmpresa!: FormGroup;

  private formSubmited!: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) {
      this.formEmpresa = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', Validators.required],
      cpf_cnpj: ['', [Validators.required, Validators.minLength(11)]],
      data_nascimento: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.minLength(8)]]

    })
  }

  salvarDados(){
    if (this.formEmpresa.valid){
      const dados = this.formEmpresa.value;

      //Enviar dados para API usando HttpClient
      this.http.post('http://localhost:8080/clientes',dados).subscribe(response =>(
        //Tratando a resposta da API,se necessário
        console.log('Dados enviados com sucesso', response)));
      } (error: any) => {
        //Lidar com erros, se houver algum
        console.error('Erro ao enviar os dados', error);
      };

    }

    isFieldInvalid(field: string) {

      return (
        (!this.formEmpresa.get(field)?.valid && this.formEmpresa.get(field)?.touched) ||
        (this.formEmpresa.get(field)?.untouched && this.formSubmited)
      );
    }
  }
