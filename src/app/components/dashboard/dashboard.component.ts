import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../Services/StudentsService';
import { LessonService } from '../../Services/LessonService';
import { UserService } from '../../Services/UserService';
import { AgGridModule } from 'ag-grid-angular';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color } from '@swimlane/ngx-charts';
import { ScaleType } from '@swimlane/ngx-charts';
ModuleRegistry.registerModules([
  ClientSideRowModelModule
]);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AgGridModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
pieData: any[] = [];
barData: any[] = [];
  lessons: any[] = [];
  students: any[] = [];
colorScheme = {
  name: 'customScheme',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ['#f70056', '#fa8484', '#ffe0e6', '#fff0f6', '#f7b6b6', '#f7d6e0']
};
  constructor(
    private router: Router,
    private studentService: StudentService,
    private lessonService: LessonService
  ) {}


ngOnInit(): void {
  this.lessons = this.lessonService.getLessons();      // מחזיר מערך רגיל
  this.students = this.studentService.getstudents();   // מחזיר מערך רגיל

  const courseCount: { [lessonName: string]: number } = {};

  this.students.forEach(student => {
    const lesson = this.lessons.find(l => l.id === student.lesson);
    if (lesson) {
      courseCount[lesson.lessonName] = (courseCount[lesson.lessonName] || 0) + 1;
    }
  });

  const uniqueLessonNames = Array.from(new Set(this.lessons.map(l => l.lessonName)));
  this.barData =  uniqueLessonNames.map(name => ({
    name,
    series: [
      { name: 'נרשמות', value: courseCount[name] || 0 }
    ]
  }));

  console.log("barData:");
  console.log(this.barData);
}



  goToLessons() {
    this.router.navigate(['/lessons']);
  }

  goToStudents() {
    this.router.navigate(['/students']);
  }




}
