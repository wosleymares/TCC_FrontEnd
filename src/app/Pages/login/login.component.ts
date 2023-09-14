import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from 'src/app/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule
  ],
})

export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  private formSubmited!: boolean;

  fb = inject(FormBuilder);

  auth = inject(AuthService);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });

  }

  login() {
    this.auth.login(this.loginForm.value);
  }

  isFieldInvalid(field: string) {

    return (
      (!this.loginForm.get(field)?.valid && this.loginForm.get(field)?.touched) ||
      (this.loginForm.get(field)?.untouched && this.formSubmited)
    );
  }
}
