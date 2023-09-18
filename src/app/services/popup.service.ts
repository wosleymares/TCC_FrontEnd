import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  //Abre popup na tela
  abrirPopUp() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '300px',
    });

    // Fecha mensagem após 3 segundos
    setTimeout(() => {
      dialogRef.close();
    }, 3000);


  }
}
