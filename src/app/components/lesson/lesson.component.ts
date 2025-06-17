import { Component, Input, OnInit, Optional } from '@angular/core';
import { LessonService } from '../../Services/LessonService';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [     CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css',
})
export class LessonComponent  implements OnInit {
  @Input() lesson: any;
  teacherName: string = '';

   constructor(
    private lessonService: LessonService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (!this.lesson && this.data?.lesson) {
      this.lesson = this.data.lesson;
    }
    if (this.lesson) {
      this.teacherName = this.lessonService.getTeacherName(this.lesson.teacherId) || 'לא ידוע';
    }

  }
}
