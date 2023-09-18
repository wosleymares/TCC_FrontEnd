import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta-pessoal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './conta-pessoal.component.html',
  styleUrls: ['./conta-pessoal.component.scss']
})
export class ContaPessoalComponent{

  cadastroSucesso = false;

  formPessoal: FormGroup;

  private formSubmited!: boolean;

  //Injeção de dependência no construtor e validando campos.
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private popupService: PopupService) {
    this.formPessoal = this.fb.group({
      id:[''],
      nome: ['', Validators.required],
      telefone:  ['',[Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  salvarDados(){
    if (this.formPessoal.valid){
      const dados = this.formPessoal.value;

      //Enviar dados para API usando HttpClient
      this.http.post('http://localhost:8080/usuarios',dados).subscribe(response =>(
        //Tratando a resposta da API,se necessário
        console.log('Cadastrado com sucesso', response)));
          //popup cadastro realizado
          this.popupService.abrirPopUp();

          //Após o envio reseta o form e volta para Login
          this.formPessoal.reset();
          this.router.navigate(['/login']);
      } (error: any) => {
        //Lidar com erros, se houver algum
        console.error('Erro ao enviar os dados', error);
      };

    }

    isFieldInvalid(field: any) {

      return (
        (!this.formPessoal.get(field)?.valid && this.formPessoal.get(field)?.touched) ||
        (this.formPessoal.get(field)?.untouched && this.formSubmited)
      );
    }
  }

