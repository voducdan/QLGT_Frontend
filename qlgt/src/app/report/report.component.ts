import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: any
  exportData: any
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    headers: ['MA_BIEN_BANG', 'MA_SO_CONG_AN', 'TEN_CONG_AN', 'TEN_KHACH_HANG', 'LOI_VI_PHAM', 'GIA_PHAT'],
    showTitle: true,
    showLabels: false,
    title: 'DANH SACH LOI VI PHAM',
    removeNewLines: true,
    useBom: true,
  };
  public bienBangData: ChartDataSets[] = [
    {
      data: [],
      yAxisID: 'A',
      label: 'Số lượng lỗi vi phạm trong tháng',
      type: 'bar',
      backgroundColor: '#ea65da',
    },
  ];
  public bienBangLabel: Label[] = [];
  public chartOptions: ChartOptions = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
    scales: {
      yAxes: [
        {
          id: 'A',
          type: 'linear',
          position: 'left',
        },

      ],
    },

  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#97bbcd',
      backgroundColor: '#21209c',
    },
  ];
  public barChartColors: Color[] = [
    {
      borderColor: '#2376d0',
      backgroundColor: '#97bbcd',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public barChartType = 'bar';
  public lineChartPlugins = [];

  ngOnInit(): void {
    this.getData().subscribe(res => {
      if (res.success) {
        this.data = res.data
        this.getFullData()
        this.data = this.data.sort((a: any, b: any) => a.day - b.day)
        console.log(this.data)
        this.data.map((item: any) => {
          this.bienBangLabel.push(String(item.day));
          this.bienBangData[0].data?.push(item.count)
        });
      }
      else {

      }
    })

    this.getExportData().subscribe(res => {
      this.exportData = res.data
    })
  }

  getExportData(): Observable<any> {
    return this.http
      .get("http://localhost:52060/api/agg/report/danhsachloivipham")
  }
  getData(): Observable<any> {
    return this.http
      .get("http://localhost:52060/api/agg/report")
  }
  getFullData() {
    let dayinMonth: Array<number> = []
    for (let i = 1; i <= 31; i++) {
      dayinMonth.push(i)
    }
    let day: Array<number> = []
    this.data.map((item: any) => {
      day.push(item.day)
    })
    console.log(day)
    let duma: Array<number> = dayinMonth.filter((i: number) =>
      !day.includes(i))
    duma.map((item: number) => {
      this.data.push({
        day: item,
        count: 0
      })
    })
  }
}
