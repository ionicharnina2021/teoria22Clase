import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movil } from 'src/app/core/model/movil';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit {

  @Output() emisor=new EventEmitter();
  @Input()
  movil!: Movil;
  constructor() { }

  ngOnInit(): void {
  }

  propagar(){
    this.emisor.emit(this.movil);
  }
}
