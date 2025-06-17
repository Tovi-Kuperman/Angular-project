import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../Services/LessonService';
import { UserService } from '../../Services/UserService';
import { CommonModule, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LessonComponent } from '../lesson/lesson.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
  standalone: true,
  imports: [MatIconModule ,MatCardModule, CommonModule, LessonComponent, MatDialogModule]

})
export class LessonsComponent implements OnInit{
lessons: any;
hoveredLesson() {
throw new Error('Method not implemented.');
}


  constructor( public lessonService: LessonService, private dialog: MatDialog
) {}
  
openLessonDialog(lesson: any) {
  this.dialog.open(LessonComponent, {
    data: { lesson }
  });
}
  ngOnInit(): void {
    this.lessons = this.lessonService.getLessons();
  }

  isActiveLesson(lesson: any): boolean {
  const now = new Date();
  return lesson.status === 'פעיל' && new Date(lesson.dateOfBegin) <= now;
}
}
