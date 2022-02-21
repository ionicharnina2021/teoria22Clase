import { MyFormGroup } from './../../model/myFormGroup';
import { CustomreactiveService } from './../../services/customreactive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-custom02',
  templateUrl: './reactive-custom02.component.html',
  styleUrls: ['./reactive-custom02.component.css']
})
export class ReactiveCustom02Component implements OnInit {
  public controlForm!: MyFormGroup;
  public nombreControles:string[];
  constructor(public customReactiveServer:CustomreactiveService) {
    this.controlForm=this.customReactiveServer.myFormGroup;
    this.nombreControles=this.customReactiveServer.nombreControles;
   }

  ngOnInit(): void {
  }

}
