import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string = '';

  ngOnInit(): void {
    // שלוף את שם המשתמש מה-localStorage (או currentUser)
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userName = currentUser.name || '';
    console.log(`Current user name: ${this.userName}`);
    
  }
}