import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StoreSummary} from '../store-summary'
import { StoreSummaryService } from '../store-summary.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  isLoadingResults = true;
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
  miniCardData: StoreSummary[];
  constructor(private breakpointObserver: BreakpointObserver, private summaryService: StoreSummaryService) {}

  ngOnInit() {
    this.summaryService.getStoreSummary().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
        this.isLoadingResults = false;
      }
    });
    
  } 

}
