import { Component, OnInit } from '@angular/core';

// The decorator, which is imported above.
// Has a JavaScript object with class metadata to tell ng what to do with class.
@Component({
  selector: 'ui-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
 

  ngOnInit() {
  }
}
