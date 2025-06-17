import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/StudentsService';
import { LessonService } from '../../Services/LessonService';
import { AgGridModule } from 'ag-grid-angular';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { MatIconModule } from '@angular/material/icon';
import { AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetailsDialogComponent } from '../student-details-dialog/student-details-dialog.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [AgGridModule,MatIconModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
   @ViewChild(AgGridAngular) agGrid!: AgGridAngular;


   ngAfterViewInit() {
  setTimeout(() => {
    const gridElement = document.querySelector('ag-grid-angular');
    gridElement?.addEventListener('click', (event: any) => {
      if (event.target.closest('.details-btn')) {
        const id = event.target.closest('.details-btn').getAttribute('data-id');
        this.openStudentDetailsDialog(id);
      }
    });
  }, 0);
}


openStudentDetailsDialog(studentId: string) {
  const student = this.rowData.find(s => s.id === studentId);
  if (student) {
    this.dialog.open(StudentDetailsDialogComponent, {
      data: { student }
    });
  }
}


  rowData: any[] = [];
  columnDefs = [
    {headerName: 'פרטים', field: 'details', cellRenderer: (params: { data: { id: any; }; }) => {return `<button class="details-btn" data-id="${params.data.id}"><span class="material-icons">info</span></button>`;},
    width: 100,
    suppressMenu: true,
    sortable: false,
    filter: false
  },
  { headerName: 'שולם?', field: 'isPaid', sortable: true, filter: true },
  { headerName: 'מחיר', field: 'price', sortable: true, filter: true },
  { headerName: 'שיעור', field: 'lessonName', sortable: true, filter: true },
  { headerName: 'מס. זהות', field: 'id', sortable: true, filter: true },
  { headerName: 'טלפון', field: 'phone', sortable: true, filter: true },
  { headerName: 'שם משפחה', field: 'studentastName', sortable: true, filter: true },
  { headerName: 'שם פרטי', field: 'studentFirstName', sortable: true, filter: true }
  ];
     
rowClassRules = {
  
  'unpaid-row': (params: any) => {
    // console.log(params.data.isPaid); 
    return params.data && params.data.isPaid === false;
  },
  'paid-row': (params: any) => params.data && params.data.isPaid === true

};

  constructor(
    private studentService: StudentService,
    private lessonService: LessonService,
    private dialog: MatDialog
  ) {}

  resetFilters() {
    this.agGrid.api.setFilterModel(null);
    this.agGrid.api.onFilterChanged();
    
  }

  

  ngOnInit(): void {
    const students = this.studentService.getstudents();
    const lessons = this.lessonService.getLessons();

    // העשרת כל תלמיד בפרטי השיעור
    this.rowData = students.map(student => {
      const lesson = lessons.find(l => l.id === student.lesson);
      return {
        ...student,
        lessonName: lesson ? lesson.lessonName : '',
        price: lesson ? lesson.price : 0
      };
    });
  }
}
