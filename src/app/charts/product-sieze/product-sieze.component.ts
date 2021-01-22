import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-sieze',
  templateUrl: './product-sieze.component.html',
  styleUrls: ['./product-sieze.component.scss']
})
export class ProductSiezeComponent implements OnInit {

  data : Product[] = [];
  bubbleData :any[];
  displayBubble = false;
  isLoadingResults = true;

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 35,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Products Sieze',
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

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    

    this.api.getProducts().subscribe(res => {
      this.data = res;
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

}
