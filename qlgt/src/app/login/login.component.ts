import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  loginForm = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };
  loginErr: string = ''
  ngOnInit(): void {
  }
  onSubmit() {
    this.login(this.loginForm.value).subscribe(res => {
      if (res.code == 200) {
        this.router.navigateByUrl('/customers').then(() => {
          window.location.reload();
        })
        localStorage.setItem('token', res.accessToken)
      } else {
        this.loginErr = res.message
      }
    })
  }

  setToken(body: any) {
    if (body.success) {
      localStorage.setItem('token', body.token);
    }
  }

  login(account: any): Observable<any> {
    return this.http
      .post("http://localhost:52060/api/auth/login", account, this.httpOptions)
  }
}
