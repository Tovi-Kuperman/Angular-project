import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LessonsComponent } from './components/lessons/lessons.component'; // Import LessonsComponent
import { StudentsComponent } from './components/students/students.component';
import { AuthGuard } from './AuthGuard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect root to 'login'
    { path: 'login', component: LoginComponent },
    { path: 'lessons', component: LessonsComponent, canActivate: [AuthGuard], data: { roles: ['teacher', 'admin'] } },
    { path: 'students', component: StudentsComponent, canActivate: [AuthGuard], data: { roles: ['secretary', 'admin'] } },

    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } }

];
