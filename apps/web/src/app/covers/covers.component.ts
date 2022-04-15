import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sounds-of-teyvat-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.log('CoversComponent.ngOnInit()');
  }

}
