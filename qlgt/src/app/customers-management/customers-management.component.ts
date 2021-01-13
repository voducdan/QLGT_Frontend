import { HttpClient } from '@angular/common/http';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, getModuleFactory, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-customers-management',
  templateUrl: './customers-management.component.html',
  styleUrls: ['./customers-management.component.css']
})
export class CustomersManagementComponent implements OnInit {

  custommersInfo: any = {
    data: {
      data: [],
      prePage: {},
      nextPage: {},
      currPage: {}
    }
  };
  selectedUserId: any;
  newCustomer: any = {};
  customerInfoUpdate: any = {};
  successAction: any = {
    success: ""
  };

  isAdded: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.getUsers(1);
  }

  getUsers(pageIndex: number) {
    this.http.get('http://localhost:52060/api/customers?PageIndex=' + pageIndex).subscribe(users => {
      // Read the result field from the JSON response.
      console.log(users);
      this.custommersInfo = users;
    });
  }

  addUser(newCustomer: any) {
    this.http.post<any>('http://localhost:52060/api/customers/', newCustomer).subscribe(res => {
      console.log(res);
      if (res.success)
        this.showSuccess();
      else
        this.showError();
    })
  }

  updateUser(newCustomer: any) {
    this.http.put<any>('http://localhost:52060/api/customers/' + this.selectedUserId, this.customerInfoUpdate)
      .subscribe(data => console.log);
  }

  autoClose() {
    if (this.successAction.success) {
      setTimeout(() => {
        $('#exit').click();
      }, 1000);
    }
  }

  showSuccess() {
    $('#success-dialog').css('display', 'block');
    setTimeout(() => {
      $('#exit').click();
      $('#success-dialog').css('display', 'none');
    }, 1000);

  }

  showError() {
    $('#error-dialog').css('display', 'block');
  }

  resetAlertDialog() {
    $('#error-dialog').css('display', 'none');
    $('#success-dialog').css('display', 'none');
  }
}
