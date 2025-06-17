import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

  private users = [
    {id:9, userName: 'Sari Ben Tzvi', password: 'sbtz11', role: 'teacher' ,name: 'שרי בן צבי'},
    {id:8, userName: 'Esthy Mayer', password: 'em1234', role: 'teacher' ,name: 'אסתי מאייר'},
    {id:7, userName: 'Michal Cohen', password: 'Cm783411', role: 'teacher' ,name: 'מיכל כהן' },
    {id:6, userName: 'Leah Kornhoiser', password: 'Korn7791', role: 'teacher'  ,name: 'לאה קורנהויזר'},
    {id:5, userName: 'Gila Ainhoren', password: 'ggg4563', role: 'teacher' ,name: 'גילה אינהורן' },
    {id:4, userName: 'Tehila Levi', password: 'tehi05276', role: 'teacher'  ,name: 'תהילה לוי'},
    {id:3, userName: 'Shulamit Blau', password: 'shu564Blau', role: 'secretary' ,name: 'שולמית בלאו' },
    {id:2, userName: 'Batya Elias', password: 'batElias34', role: 'secretary' ,name: 'בתיה אליאס' },
    {id:1, userName: 'Nechama Weinberg', password: 'nc56923Wein', role: 'admin'  ,name: 'נחמה וינברג'}
  ];

  getUserRole(userName: string, password: string): 'teacher' | 'secretary' | 'admin'  {
    const user = this.users.find(u => u.userName === userName && u.password === password);
    return user ? user.role as 'teacher' | 'secretary' | 'admin':'teacher';
  }
  getCurrentUser() {

    return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

  getUserByCredentials(userName: string, role: string) {
    return this.users.find(
      u => u.userName === userName && u.role === role
    ) || null;
  }

   getUsers() {
    return this.users;
  }
}