import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentService {

  private students = [
    {studentFirstName: 'תמר', studentastName: 'רוזנברג', phone: '0527646870' ,id: '374920439',lesson: 1, price: 0, isPaid: false},
    {studentFirstName: 'מרים', studentastName: 'דרנגר', phone: '0527626196' ,id: '040732654',lesson: 2, price: 0, isPaid: true},  
    {studentFirstName: 'מרים', studentastName: 'דרנגר', phone: '0527626196' ,id: '040732654',lesson: 2, price: 0, isPaid: true},  
    {studentFirstName: 'אפרת', studentastName: 'כץ', phone: '0541234567' ,id: '123456789',lesson: 3, price: 0, isPaid: false},
    {studentFirstName: 'דינה', studentastName: 'לוי', phone: '0547654321' ,id: '987654321',lesson: 4, price: 0, isPaid: true},   
    {studentFirstName: 'יהודית', studentastName: 'פרידמן', phone: '0501234567' ,id: '456789123',lesson: 5, price: 0, isPaid: false},
    {studentFirstName: 'נועה', studentastName: 'אברמוביץ', phone: '0507654321' ,id: '321654987',lesson: 6, price: 0, isPaid: true},      
    {studentFirstName: 'נחמי', studentastName: 'גולדשטיין', phone: '0531234567' ,id: '159753486',lesson: 7, price: 0, isPaid: false},
    {studentFirstName: 'שרית', studentastName: 'קרמר', phone: '0537654321' ,id: '753159852',lesson: 8, price: 0, isPaid: true},
    {studentFirstName: 'ברכי', studentastName: 'פרצוביץ', phone: '0521234567' ,id: '258369147',lesson: 9, price: 0, isPaid: false},
    {studentFirstName: 'תמי', studentastName: 'גרוסברד', phone: '0529876543' ,id: '369258147',lesson: 10, price: 0, isPaid: true}
    


  ];

  getstudentById(id: string) {
    const student = this.students.find(s => s.id === id);
    return student ? student: null;
  }

   getstudents() {
    return this.students;
  }
}