import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreSummary } from './store-summary';

@Injectable({
  providedIn: 'root'
})
export class StoreSummaryService {

  getStoreSummary(): Observable<StoreSummary[]> {
    return of([
      { title: "Total Categories", value: "12", isIncrease: true, color: "primary", percentValue: "0.5383", icon: "category", isCurrency: true },
      { title: "Average Product Price", value: "65", isIncrease: false, color: "accent", percentValue: "0.2544", icon: "euro_symbol", isCurrency: true },
      { title: "Total Products", value: "19", isIncrease: true, color: "warn", percentValue: "0.4565", icon: "shopping_cart", isCurrency: false },
      { title: "Returning Customers", value: "10", isIncrease: false, color: "primary", percentValue: "0.8361", icon: "portrait", isCurrency: false }
    ]);
  }

  constructor() { }
}