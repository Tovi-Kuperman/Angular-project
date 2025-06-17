import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { LessonsComponent } from './components/lessons/lessons.component';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, LessonsComponent, CommonModule, NgxChartsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
isLoggedIn():boolean {
  const currentUser = localStorage.getItem('currentUser');
  return !!currentUser && JSON.parse(currentUser).userName;
}
  title = 'gym';
   constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  showLogout(): boolean {
    // console.log(this.router.url !== '/login');
    return this.router.url !== '/login';
  }
}
