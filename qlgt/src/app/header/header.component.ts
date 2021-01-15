import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  user: string = ''
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),

  };
  ngOnInit(): void {
    this.getUserInfo().subscribe(res => {
      this.user = res.userName
    })
  }
  getUserInfo(): Observable<any> {
    const token: string = localStorage.getItem('token') || ''
    return this.http
      .get("http://localhost:52060/api/auth/generator", {
        headers: {
          authorization: token
        }
      })
  }

}
