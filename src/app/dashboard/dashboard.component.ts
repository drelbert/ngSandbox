import { Component,
         OnInit } from '@angular/core';




@Component({
  selector: 'ui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;

  ngOnInit() {
  }

}
