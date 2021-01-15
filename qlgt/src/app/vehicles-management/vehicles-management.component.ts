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
  selectedVehicle: any = {};
  newVehicle: any = {};
  vehicleInfoUpdate: any = {};
  successAction: any = {
    success: ""
  };

  vehiclesType: any = {};
  isAdded: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.getVehicles(1);
    this.getVehiclesType();
  }

  getVehicles(pageIndex: number) {
    this.http.get('http://localhost:52060/api/vehicles?PageIndex=' + pageIndex).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.vehiclesInfo = data;
    });
  }

  addVehicle(newVehicle: any) {
    this.http.post<any>('http://localhost:52060/api/vehicles/', newVehicle).subscribe(res => {
      console.log(res);
      if (res.success)
        this.showSuccess();
      else
        this.showError();
    })
  }

  updateVehicle(selectedVehicle: any) {
    delete selectedVehicle.teN_KHACH_HANG;
    delete selectedVehicle.teN_LOAI_PHUONG_TIEN;
    this.http.put<any>('http://localhost:52060/api/vehicles/', selectedVehicle)
      .subscribe(res => {
        console.log(res);
        if (res.success)
          this.showSuccess();
        else
          this.showError();
      }
      );
  }

  deleteVehicle(selectedVehicle: number) {
    this.http.delete('http://localhost:52060/api/vehicles/'+selectedVehicle)
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
      this.getVehicles(1);
      this.newVehicle = "";
    }, 1000);

  }

  showError() {
    $('.alert-danger').css('display', 'block');
  }

  resetAlertDialog() {
    $('.alert-danger').css('display', 'none');
    $('.alert-success').css('display', 'none');
  }

  getSelected(vehicle: any) {
    this.selectedVehicle = Object.assign({}, vehicle);
  }

  getVehiclesType() {
    this.http.get('http://localhost:52060/api/vehicles/vehicletypes').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.vehiclesType = data;
    });
  }
}
