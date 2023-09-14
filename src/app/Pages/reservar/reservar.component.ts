import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule
  ],
})
export class ReservarComponent {


      reservaForm!: FormGroup;

      private formSubmited!: boolean;

      constructor(private fb: FormBuilder, private http: HttpClient) {
        this.reservaForm = this.fb.group({
          nome: ['', Validators.required],
          buffet:  [''],
          endereco: [''],
          data: [''],
          horario: ['']
        });
      }


      salvarDados(){
        if (this.reservaForm.valid){
          const dados = this.reservaForm.value;

          //Enviar dados para API usando HttpClient
          this.http.post('http://localhost:8080/reservas',dados).subscribe(response =>(
            //Tratando a resposta da API,se necessário
            console.log('Dados enviados com sucesso', response)));
          } (error: any) => {
            //Lidar com erros, se houver algum
            console.error('Erro ao enviar os dados', error);
          };

        }

        isFieldInvalid(field: string) {

          return (
            (!this.reservaForm.get(field)?.valid && this.reservaForm.get(field)?.touched) ||
            (this.reservaForm.get(field)?.untouched && this.formSubmited)
          );
    }
}
