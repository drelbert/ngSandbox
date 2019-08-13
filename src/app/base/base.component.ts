import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../data/data.model';

@Component({
  selector: 'ui-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  data: Observable<DataModel>;

    constructor(
      private http: HttpClient) {
        this.data = this.http.get<DataModel>('./assets/data.json');
     }

  ngOnInit() {
  }

}
