import { Component, OnInit } from '@angular/core';
// export { itsabool };
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itsabool = true;
  constructor() { }

  ngOnInit() {
  }

}
