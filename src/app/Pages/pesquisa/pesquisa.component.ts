import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatIconModule],
})
export class PesquisaComponent {
  option1: boolean = false;
  option2: boolean = false;
  sliderValue: number = 50;
}
