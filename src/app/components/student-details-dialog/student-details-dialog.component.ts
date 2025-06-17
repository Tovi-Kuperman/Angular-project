import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-student-details-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './student-details-dialog.component.html',
  styleUrl: './student-details-dialog.component.css'
})
export class StudentDetailsDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {console.log(this.data);}

}
