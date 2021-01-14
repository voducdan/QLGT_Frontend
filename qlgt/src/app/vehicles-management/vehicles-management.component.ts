import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-vehicles-management',
  templateUrl: './vehicles-management.component.html',
  styleUrls: ['./vehicles-management.component.css']
})
export class VehiclesManagementComponent implements OnInit {
  vehiclesInfo: any = {
    data: {
      data: [],
      prePage: {},
      nextPage: {},
      currPage: {}
    }
  };
  selectedUser: any = {};
  newCustomer: any = {};
  vehicleInfoUpdate: any = {};
  successAction: any = {
    success: ""
  };

  isAdded: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.getVehicles(1);
  }

  getVehicles(pageIndex: number) {
    this.http.get('http://localhost:52060/api/vehicles?PageIndex=' + pageIndex).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.vehiclesInfo = data;
    });
  }

  addUser(newCustomer: any) {
    this.http.post<any>('http://localhost:52060/api/vehicles/', newCustomer).subscribe(res => {
      console.log(res);
      if (res.success)
        this.showSuccess();
      else
        this.showError();
    })
  }

  updateUser(selectedUser: any) {
    this.http.put<any>('http://localhost:52060/api/vehicles/', selectedUser)
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
      this.getVehicles(1);
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
