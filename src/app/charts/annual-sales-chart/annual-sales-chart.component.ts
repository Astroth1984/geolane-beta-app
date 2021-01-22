import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { Product } from 'src/app/product';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-annual-sales-chart',
  templateUrl: './annual-sales-chart.component.html',
  styleUrls: ['./annual-sales-chart.component.scss']
})
export class AnnualSalesChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Price' },
    { data: [], label: 'Price No Tax' , yAxisID: 'y-axis-1'}
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions:  any = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
            
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  listedProducts = [];
  listedPrices = [];
  listedPricesHT = [];
  data : Product[] = [];
  checked = false;


  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  
  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getProducts().subscribe(res => {
      this.data = res;
      this.AnalyticsData(this.data, this.listedProducts,this.listedPrices,this.listedPricesHT);
      this.ChartData();
    }, err => {
      console.log(err);
    });
  }

  AnalyticsData (analyticData : Product[],listName = [],listPrice = [], listPriceHT = []){
    analyticData.forEach((value: {prod_name:any,prod_price:any,prod_priceHT:any,sieze:any }, index: any) => {
      listName.push(value.prod_name);
      listPrice.push(value.prod_price);
      listPriceHT.push(value.prod_priceHT);
    }); 
  }

  ChartData(){
      this.lineChartData[0].data = [];
      this.lineChartData[1].data = [];
      this.lineChartLabels = [];
      this.listedPrices.forEach((dataset, index) => {
        this.lineChartData[0] = Object.assign({}, this.lineChartData[0], {
          data: [...this.lineChartData[0].data, this.listedPrices[index]]
        });
  
      });
      this.listedPricesHT.forEach((dataset, index) => {
        this.lineChartData[1] = Object.assign({}, this.lineChartData[1], {
          data: [...this.lineChartData[1].data, this.listedPricesHT[index]]
        });
  
      });
      this.listedProducts.forEach((label, index) => {
        this.lineChartLabels = [...this.lineChartLabels, this.listedProducts[index]];
  
      });
    
  }

  // events 
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
 
  // Change visualisation Type  
  setValue (){
    this.checked = !this.checked;
    if(this.checked){
      this.lineChartType = 'bar'  
   }else{
      this.lineChartType = 'line'  
   }
}

}
