import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  standalone: true,
  imports:[MatDialogModule, FormsModule],
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  constructor(private dialogRef: MatDialogRef<PopupComponent>) {}

  fecharPopUp() {
    this.dialogRef.close();
  }

}
