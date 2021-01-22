import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, BaseChartDirective, Color } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
  styleUrls: ['./product-sales-chart.component.scss']
})
export class ProductSalesChartComponent implements OnInit {


  listedProducts = [];
  listedPrices = [];
  listedPricesHT = [];
  data : Product[] = [];

  public radarChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      arc: {
          borderWidth: 0
      }
    },
    
    legend: {
      labels: {
        fontSize: 10,
        fontColor : '#ffffff' 
      }
    }
  };
  public radarChartLabels: Label[] = [];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: 'Price' },
    { data: [], label: 'Price Not Taxed'}
  ];
  public radarChartColors: Color[] = [
    
    {
      backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(255,255,0,0.3)']
    }

    
  ];
  public radarChartType: ChartType = 'radar';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    

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
      this.radarChartData[0].data = [];
      this.radarChartData[1].data = [];
      this.radarChartLabels = [];
      this.listedPrices.forEach((dataset, index) => {
        this.radarChartData[0] = Object.assign({}, this.radarChartData[0], {
          data: [...this.radarChartData[0].data, this.listedPrices[index]]
        });
  
      });
      this.listedPricesHT.forEach((dataset, index) => {
        this.radarChartData[1] = Object.assign({}, this.radarChartData[1], {
          data: [...this.radarChartData[1].data, this.listedPricesHT[index]]
        });
  
      });
      this.listedProducts.forEach((label, index) => {
        this.radarChartLabels = [...this.radarChartLabels, this.listedProducts[index]];
  
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
