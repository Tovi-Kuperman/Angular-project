import { Injectable } from '@angular/core';
import { UserService } from './UserService';
@Injectable({ providedIn: 'root' })
export class LessonService {
  constructor(private userService: UserService) {}

  private lessons = [
    {id:1, lessonName: 'התעמלות מים נשים', teacherId: 4, dateOfBegin: new Date('2025-06-01'),day:'ראשון', time: '18:30', room: 'בריכה', price: 900, maxStudents: 20, currentStudents: 18, status: 'פעיל', imageUrl: '/images/pool.jpg' },
    {id:2, lessonName: 'התעמלות מים נשים', teacherId: 5, dateOfBegin: new Date('2025-06-02'),day:'שני', time: '16:30', room: 'בריכה', price: 900, maxStudents: 20, currentStudents: 14, status: 'פעיל' , imageUrl: '/images/pool.jpg'},
    {id:3, lessonName: 'התעמלות נשים', teacherId: 6, dateOfBegin: new Date('2025-06-01'),day:'ראשון', time: '13:30', room: 'חדר התעמלות 1', price: 700, maxStudents: 20, currentStudents: 19, status: 'פעיל', imageUrl: '/images/fitness-balls-hardwood-floor-gym.jpg' },
    {id:4, lessonName: 'התעמלות נשים', teacherId: 7, dateOfBegin: new Date('2025-06-02'),day:'שני', time: '18:30', room: 'חדר התעמלות 1', price: 700, maxStudents: 20, currentStudents: 11, status: 'פעיל', imageUrl: '/images/fitness-balls-hardwood-floor-gym.jpg' },
    {id:5, lessonName: 'התעמלות נשים', teacherId: 8, dateOfBegin: new Date('2025-06-03'),day:'שלישי', time: '17:30', room: 'חדר התעמלות 1', price: 700, maxStudents: 20, currentStudents: 12, status: 'פעיל', imageUrl: '/images/fitness-balls-hardwood-floor-gym.jpg' },
    {id:6, lessonName: 'התעמלות נשים', teacherId: 9, dateOfBegin: new Date('2025-01-01'),day:'רביעי', time: '18:00', room:'חדר התעמלות 1', price: 700, maxStudents: 20, currentStudents: 13, status: 'פעיל' , imageUrl: '/images/fitness-balls-hardwood-floor-gym.jpg'},
    {id:7, lessonName: 'התעמלות נשים', teacherId: 5, dateOfBegin: new Date('2025-10-01'),day:'חמישי', time: '15:30', room: 'חדר התעמלות 1', price: 700, maxStudents: 20, currentStudents: 14, status: 'פעיל', imageUrl: '/images/fitness-balls-hardwood-floor-gym.jpg' },
    {id:8, lessonName: 'התעמלות נשים', teacherId: 4, dateOfBegin: new Date('2025-11-02'),day:'שני', time: '18:30', room: 'חדר התעמלות 2', price: 700, maxStudents: 20, currentStudents: 18, status: 'פעיל', imageUrl: '/images/school-gym-corner-with-wooden-wall-bars-shelves-filled-with-various-colorful-balls-including-inflatable-textured-ones.jpg' },
    {id:9, lessonName: 'התעמלות נשים', teacherId: 5, dateOfBegin: new Date('2025-12-01'),day:'רביעי', time: '18:30', room: 'חדר התעמלות 2', price: 700, maxStudents: 20, currentStudents: 12, status: 'פעיל', imageUrl: '/images/school-gym-corner-with-wooden-wall-bars-shelves-filled-with-various-colorful-balls-including-inflatable-textured-ones.jpg' },
    {id:10, lessonName: 'התעמלות נשים', teacherId: 7, dateOfBegin: new Date('2025-02-01'),day:'שישי', time: '08:30', room: 'חדר התעמלות 2', price: 700, maxStudents: 20, currentStudents: 10, status: 'פעיל' , imageUrl: '/images/school-gym-corner-with-wooden-wall-bars-shelves-filled-with-various-colorful-balls-including-inflatable-textured-ones.jpg'},
    {id:11, lessonName: 'התעמלות מים נערות', teacherId: 8, dateOfBegin: new Date('2025-05-01'),day:'ראשון', time: '16:30', room: 'בריכה', price: 900, maxStudents: 20, currentStudents: 15, status: 'פעיל', imageUrl: '/images/pool.jpg' },
    {id:12, lessonName: 'התעמלות מים נערות', teacherId: 6, dateOfBegin: new Date('2025-05-04'),day:'רביעי', time: '18:30', room: 'בריכה', price: 900, maxStudents: 20, currentStudents: 16, status: 'פעיל', imageUrl: '/images/pool.jpg' },
    {id:13, lessonName: 'התעמלות נערות', teacherId: 8, dateOfBegin: new Date('2025-05-01'),day:'ראשון', time: '18:30', room: 'חדר התעמלות 3', price: 700, maxStudents: 20, currentStudents: 18, status: 'פעיל', imageUrl: '/images/minsk-belarus-july-2019-interior-stylish-fitness-club-kids-gymnastics-room-with-sports-simulators.jpg' },
    {id:14, lessonName: 'התעמלות נערות', teacherId: 9, dateOfBegin: new Date('2025-06-02'),day:'שני', time: '18:30', room: 'חדר התעמלות 3', price: 700, maxStudents: 20, currentStudents: 19, status: 'פעיל', imageUrl: '/images/minsk-belarus-july-2019-interior-stylish-fitness-club-kids-gymnastics-room-with-sports-simulators.jpg' },
    {id:15, lessonName: 'התעמלות נערות', teacherId: 6, dateOfBegin: new Date('2025-09-01'),day:'שלישי', time: '18:30', room: 'חדר התעמלות 3', price: 700, maxStudents: 20, currentStudents: 12, status: 'פעיל', imageUrl: '/images/minsk-belarus-july-2019-interior-stylish-fitness-club-kids-gymnastics-room-with-sports-simulators.jpg' },
    {id:16, lessonName: 'התעמלות נערות', teacherId: 5, dateOfBegin: new Date('2025-07-01'),day:'רביעי', time: '18:30', room: 'חדר התעמלות 3', price: 700, maxStudents: 20, currentStudents: 11, status: 'פעיל', imageUrl: '/images/minsk-belarus-july-2019-interior-stylish-fitness-club-kids-gymnastics-room-with-sports-simulators.jpg' },
    {id:17, lessonName: 'התעמלות נערות', teacherId: 8, dateOfBegin: new Date('2025-01-01'),day:'חמישי', time: '18:30', room: 'חדר התעמלות 3', price: 700, maxStudents: 20, currentStudents: 12, status: 'פעיל', imageUrl: '/images/minsk-belarus-july-2019-interior-stylish-fitness-club-kids-gymnastics-room-with-sports-simulators.jpg' },
    {id:18, lessonName: 'התעמלות נערות', teacherId: 7, dateOfBegin: new Date('2025-07-01'),day:'ראשון', time: '18:30', room: 'אולם כושר', price: 700, maxStudents: 20, currentStudents: 15, status: 'פעיל', imageUrl: '/images/health-club-without-people-with-exercise-equipment.jpg' },
    {id:19, lessonName: 'התעמלות נערות', teacherId: 5, dateOfBegin: new Date('2025-04-01'),day:'שלישי', time: '18:30', room: 'אולם כושר', price: 700, maxStudents: 20, currentStudents: 14, status: 'פעיל', imageUrl: '/images/health-club-without-people-with-exercise-equipment.jpg' },
    {id:20, lessonName: 'התעמלות נערות', teacherId: 6, dateOfBegin: new Date('2025-02-01'),day:'חמישי', time: '18:30', room: 'אולם כושר', price: 700, maxStudents: 20, currentStudents: 13, status: 'פעיל', imageUrl: '/images/health-club-without-people-with-exercise-equipment.jpg' },
    {id:21, lessonName: 'פילאטיס', teacherId: 7, dateOfBegin: new Date('2025-06-01'),day:'ראשון', time: '18:30', room: 'חדר התעמלות 1', price: 900, maxStudents: 20, currentStudents: 19, status: 'פעיל' , imageUrl: '/images/fitness-balls-hardwood-floor-gym.jpg'},

  ];
  
    getTeacherName(id: number): string | null {
    const teacher = this.userService.getUsers().find(u => u.role === 'teacher' && u.id === id);
    return teacher ? teacher.name : null;
    }

    getLessons(): Array<{id:number, lessonName: string; teacherId: number; dateOfBegin: Date; day: string; time: string; room: string; price: number; maxStudents: number; currentStudents: number; status: string }> {
        return this.lessons;
    }
}
