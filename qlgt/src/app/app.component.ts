import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  title = 'qlgt';
  isLogin: boolean = false;
  ngOnInit() {
    if (this.checkLogin() && !window.location.href.includes('login')) {
      this.isLogin = true
    }
  }

  checkLogin() {
    return !!localStorage.getItem('token')
  }
}
