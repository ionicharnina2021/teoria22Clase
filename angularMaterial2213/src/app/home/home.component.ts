import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  min=0;
  max=101;
  step=3;
  thumbLabel=true;
  value=0;
  other=0;
  color="0e0e0e"
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: number|null){
    if(value) this.other=value;
  }
}
