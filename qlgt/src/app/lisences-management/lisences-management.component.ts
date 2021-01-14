import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-lisences-management',
  templateUrl: './lisences-management.component.html',
  styleUrls: ['./lisences-management.component.css']
})
export class LisencesManagementComponent implements OnInit {
  custommersInfo: any = {
    data: {
      data: [],
      prePage: {},
      nextPage: {},
      currPage: {}
    }
  };
  selectedUser: any = {};
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

  updateUser(selectedUser: any) {
    this.http.put<any>('http://localhost:52060/api/customers/', selectedUser)
      .subscribe(res => {
        console.log(res);
        if (res.success)
          this.showSuccess();
        else
          this.showError();
      }
      );
  }

  showSuccess() {
    $('.alert-success').css('display', 'block');
    setTimeout(() => {
      $('.exit').click();
      $('.alert-success').css('display', 'none');
      this.getUsers(1);
    }, 1000);

  }

  showError() {
    $('.alert-danger').css('display', 'block');
  }

  resetAlertDialog() {
    $('.alert-danger').css('display', 'none');
    $('.alert-success').css('display', 'none');
  }

  getSelected(user: any) {
    this.selectedUser = Object.assign({}, user);
  }
}
