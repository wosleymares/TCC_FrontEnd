import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.scss'],
  standalone: true,
  imports:[CommonModule, FormsModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatToolbarModule ],
})
export class CadClienteComponent {
  constructor(private router: Router) {}

  criarContaPessoal() {
    this.router.navigate(['/conta-pessoal']);
  }

  criarContaEmpresa() {
    this.router.navigate(['/conta-empresa']);
  }

}
