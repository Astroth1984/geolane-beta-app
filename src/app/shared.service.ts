import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data = new BehaviorSubject([] as Product[]);
  sharedData = this.data.asObservable();

  private listedProducts = new BehaviorSubject([]);
  sharedListedProducts = this.listedProducts.asObservable();

  private listedPrices = new BehaviorSubject([]);
  sharedListedPrices = this.listedPrices.asObservable();

  constructor() { }

  nextData(data: any) {
    this.data.next(data);
  };

  changeListedProducts(newListedProducts: any[]) {
    this.listedProducts.next(newListedProducts);
  }

  changeListedPrices(newListedPrices: any[]) {
    this.listedPrices.next(newListedPrices);
  }
}
