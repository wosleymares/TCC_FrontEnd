import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decora',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './decora.component.html',
  styleUrls: ['./decora.component.scss']
})
export class DecoraComponent {
  constructor(private router: Router){}


}
