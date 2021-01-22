import { Component, Input, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs/operators';
import {SharedService} from '../shared.service'
import { Product } from '../product';
import { ApiService } from '../api.service';

import {  ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { DataD3 } from '../shareD3/DataD3';



@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  dataD3 = DataD3;

  listedProducts = [];
  listedPrices = [];
  listedPricesHT = [];
  data : Product[] = [];
  bubbleData :any[];
  displayBubble = false;
  isLoadingResults = true;
  checked = false;
  // ---------------- Line Chart Option ----------------------//

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Price' },
    { data: [], label: 'Price No Tax' , yAxisID: 'y-axis-1'}
  ];
  public lineChartLabels: any[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
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
  public lineChartColors: Color[] = [
    
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  // ---------------- Line Chart Option ----------------------//

  // ---------------- Bubble Chart Option --------------------//

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 50,
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        
      ],
      pointRadius: 10,
      label: 'Product Sieze',
      /*backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',*/
    },
  ];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: ['#010b09', '#021d18', '#033028', '#044237', '#055546', '#066756',
      '#077a65', '#088d74', '#099f84', '#010b09', '#0ab293', '#0bc4a2',
      '#0cd7b2', '#0de9c1', '#19f2ca', '#2bf3ce', '#3ef4d3', '#50f5d7',
      '#63f6db', '#75f7df', '#88f8e4', '#9af9e8', '#adfaec', '#bffbf0',
      '#d2fcf5', '#e5fdf9']
    }
  ];

  // ---------------- Bubble Chart Option --------------------//

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private sharedService : SharedService, private api: ApiService) { 
    console.log(this.dataD3);
  }

  ngOnInit(): void {
    

    this.api.getProducts().subscribe(res => {
      this.data = res;
      this.AnalyticsData(this.data, this.listedProducts,this.listedPrices,this.listedPricesHT);
      this.ChartData();
      //this.BubbleChart();
      this.bubbleChartData[0].data = this.data.map(value => ({
        x: value.id,
        y: value.sieze,
        r: value.sieze
      }));
      this.isLoadingResults = false;
      this.displayBubble = true;
      console.log(this.bubbleChartData[0].data);
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

    console.log(this.listedPrices);
    console.log(this.listedProducts);    
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
  BubbleChart(){
    this.bubbleChartData[0].data = [];
    this.bubbleChartData[0].data = this.data.map(value => ({
        x: value.id,
        y: value.sieze,
        r: value.sieze
    }));
    
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
