import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './Services/UserService';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.userService.getCurrentUser(); // נניח שיש פונקציה כזו
    const allowedRoles = route.data['roles'] as string[];

    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      // ניתוב לדף ברירת מחדל לפי תפקיד
      if (user.role === 'teacher') this.router.navigate(['/lessons']);
      else if (user.role === 'secretary') this.router.navigate(['/students']);
      else this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}