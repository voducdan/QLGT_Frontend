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
  user: any
  ngOnInit(): void {

  }
  getUserInfo(): Observable<any> {

    return this.http
      .post("http://localhost:52060/api/auth/login", this.httpOptions)
  }

}
