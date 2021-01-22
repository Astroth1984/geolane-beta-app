import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, BaseChartDirective, Color } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.scss']
})
export class SalesTrafficChartComponent implements OnInit {

  public pieChartOptions: any = {
    responsive: true,

    elements: {
      arc: {
          borderWidth: 0
      }
    },
    
    legend: {
      position: 'right',
      labels: {
        fontSize: 10,
        usePointStyle: true,
        fontColor : '#ffffff' 
      }
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Color[] = [
    {
      backgroundColor: ['#ffffff','#e6fefa','#cdfef6','#b5fdf1','#9cfded',
        '#84fde9','#6bfce4','#52fce0','#3afbdb','#21fbd7','#09fbd3','#08e1bd',
        '#07c8a8','#06af93','#05967e','#047d69','#036454','#024b3f','#01322a',
        '#001915','#000000']
    },
  ];

  listedProducts = [];
  listedPricesHT = [];
  data : Product[] = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    

    this.api.getProducts().subscribe(res => {
      this.data = res;
      this.AnalyticsData(this.data, this.listedProducts,this.listedPricesHT);
      this.ChartData();
    }, err => {
      console.log(err);
    });  
  }

  AnalyticsData (analyticData : Product[],listName = [], listPriceHT = []){
    analyticData.forEach((value: {prod_name:any,prod_price:any,prod_priceHT:any,sieze:any }, index: any) => {
      listName.push(value.prod_name);
      listPriceHT.push(value.prod_priceHT);
    }); 
  }

  ChartData(){
      this.pieChartData = [];
      this.pieChartLabels = [];

      this.listedPricesHT.forEach((dataset, index) => {
        this.pieChartData = [...this.pieChartData, this.listedPricesHT[index]];
  
      });
      this.listedProducts.forEach((label, index) => {
        this.pieChartLabels = [...this.pieChartLabels, this.listedProducts[index]];
  
      });
    
  }
  

  // events 
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
 

}
