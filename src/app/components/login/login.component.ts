import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, NgForm, FormGroup, FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';
import { UserService } from '../../Services/UserService'; // Adjust the import path as necessary
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formMessage: string = '';
  loginForm!: FormGroup;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required,Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.value;
      const role = this.userService.getUserRole(userName, password);
       const user = this.userService.getUserByCredentials(userName, role);
    if (user) {
      const currentUser = {
      userName: user.userName,
      role: user.role,
      name: user.name
};
localStorage.setItem('currentUser', JSON.stringify(currentUser));

    } else {
      this.formMessage = 'שם משתמש או סיסמה שגויים';
    }
    if (role === 'teacher') {
      this.router.navigate(['/lessons']);
    } else if (role === 'secretary' ) {
      this.router.navigate(['/students']);
    }
    else if (role === 'admin') {
      this.router.navigate(['/dashboard']);
    }
      this.loginForm.reset();
    }
     else {
      this.formMessage ='נא למלא את כל השדות בצורה תקינה';
    }
  }
}
