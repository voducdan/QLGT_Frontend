import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chitietbienban',
  templateUrl: './chitietbienban.component.html',
  styleUrls: ['./chitietbienban.component.css']
})
export class ChitietbienbanComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  reports: any = []
  ngOnInit(): void {
    let id: number = this.route.snapshot.paramMap.get('id');
    this.getData(id).subscribe(res => {
      this.reports = res.data
    })
  }

  getData(id: number): Observable<any> {
    return this.http
      .get(`http://localhost:52060/api/report/${id}`, { headers: { 'content-type': 'application/json' } })
  }
}
