import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-reports-management',
  templateUrl: './reports-management.component.html',
  styleUrls: ['./reports-management.component.css']
})
export class ReportsManagementComponent implements OnInit {
  reportsInfo: any = {
    data: {
      data: [],
      prePage: {},
      nextPage: {},
      currPage: {}
    }
  };
  selectedReport: any = {};
  newReport: any = {};
  reportInfoUpdate: any = {};
  successAction: any = {
    success: ""
  };

  reportsType: any ={
    data: []
  };

  isAdded: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.getUsers(1);
    this.getReportType();
  }

  getUsers(pageIndex: number) {
    this.http.get('http://localhost:52060/api/report?pageIndex=' + pageIndex).subscribe(users => {
      // Read the result field from the JSON response.
      console.log(users);
      this.reportsInfo = users;
    });
  }

  getReportType() {
    this.http.get('http://localhost:52060/api/reports/reporttype').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.reportsType = data;
    });
  }

  addReport(newReport: any) {
    this.http.post<any>('http://localhost:52060/api/report/', newReport).subscribe(res => {
      console.log(res);
      if (res.success)
        this.showSuccess();
      else
        this.showError();
    })
  }

  updateUser(selectedUser: any) {
    this.http.put<any>('http://localhost:52060/api/report/', selectedUser)
      .subscribe(res => {
        console.log(res);
        if (res.success)
          this.showSuccess();
        else
          this.showError();
      }
      );
  }

  deleteReport(seletedReport: number) {
    this.http.delete('http://localhost:52060/api/report/'+seletedReport)
      .subscribe((status:any) => {
        console.log(status);
        if (status.success)
        this.showSuccess();
      else
        this.showError();
      });
  }

  showSuccess() {
    $('.alert-success').css('display', 'block');
    setTimeout(() => {
      $('.exit').click();
      $('.alert-success').css('display', 'none');
      this.getUsers(1);
      this.newReport = "";
    }, 1000);

  }

  showError() {
    $('.alert-danger').css('display', 'block');
    this.newReport = "";
  }

  resetAlertDialog() {
    $('.alert-danger').css('display', 'none');
    $('.alert-success').css('display', 'none');
  }

  getSelected(user: any) {
    this.selectedReport = Object.assign({}, user);
  }
}