import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Component({
  selector: 'app-thongtinvipham',
  templateUrl: './thongtinvipham.component.html',
  styleUrls: ['./thongtinvipham.component.css']
})
export class ThongtinviphamComponent implements OnInit {

  constructor(private http: HttpClient) { }
  reports: any
  next: number = 0
  prev: number = 0
  curr: number = 0
  last: number = 0
  ngOnInit(): void {
    this.getData(1)
  }

  getData(page: number) {
    this.getAll(page).subscribe(res => {
      this.reports = res.data.data
      console.log(this.reports)
      this.next = res.data.nextPage
      this.prev = res.data.prePage
      this.curr = res.data.currPage
      this.last = res.data.lastPage
    })
  }
  getAll(page: number): Observable<any> {
    return this.http
      .get(`http://localhost:52060/api/report?pageIndex=${page}`, { headers: { 'content-type': 'application/json' } })
  }
}
