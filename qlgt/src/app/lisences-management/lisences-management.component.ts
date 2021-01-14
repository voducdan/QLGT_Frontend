import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-lisences-management',
  templateUrl: './lisences-management.component.html',
  styleUrls: ['./lisences-management.component.css']
})
export class LisencesManagementComponent implements OnInit {
  lisencesInfo: any = {
    data: {
      data: [],
      prePage: {},
      nextPage: {},
      currPage: {}
    }
  };
  selectedLisence: any = {};
  newLisence: any = {};
  lisenceInfoUpdate: any = {};
  successAction: any = {
    success: ""
  };

  lisencesType: any ={
    data: []
  };

  isAdded: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.getUsers(1);
    this.getLisenceType();
  }

  getUsers(pageIndex: number) {
    this.http.get('http://localhost:52060/api/lisences?pageIndex=' + pageIndex).subscribe(users => {
      // Read the result field from the JSON response.
      console.log(users);
      this.lisencesInfo = users;
    });
  }

  getLisenceType() {
    this.http.get('http://localhost:52060/api/lisences/lisencetype').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.lisencesType = data;
    });
  }

  addLisence(newLisence: any) {
    this.http.post<any>('http://localhost:52060/api/lisences/', newLisence).subscribe(res => {
      console.log(res);
      if (res.success)
        this.showSuccess();
      else
        this.showError();
    })
  }

  updateUser(selectedUser: any) {
    this.http.put<any>('http://localhost:52060/api/lisences/', selectedUser)
      .subscribe(res => {
        console.log(res);
        if (res.success)
          this.showSuccess();
        else
          this.showError();
      }
      );
  }

  deleteLisence(seletedLisence: number) {
    this.http.delete('http://localhost:52060/api/lisences/'+seletedLisence)
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
      this.newLisence = "";
    }, 1000);

  }

  showError() {
    $('.alert-danger').css('display', 'block');
    this.newLisence = "";
  }

  resetAlertDialog() {
    $('.alert-danger').css('display', 'none');
    $('.alert-success').css('display', 'none');
  }

  getSelected(user: any) {
    this.selectedLisence = Object.assign({}, user);
  }
}
