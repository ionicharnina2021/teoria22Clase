import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-teoria',
  templateUrl: './reactive-teoria.component.html',
  styleUrls: ['./reactive-teoria.component.css']
})
export class ReactiveTeoriaComponent implements OnInit {
  profileForm!:FormGroup;
  name=new FormControl('',Validators.minLength(3));
  otro=new FormControl('',[Validators.min(1),Validators.max(99)]);
  constructor() {
    this.profileForm=new FormGroup({});
    this.profileForm.setControl('name',this.name);
    this.profileForm.setControl('otro',this.otro);
   }

  ngOnInit(): void {
  }
  onSubmit(){
    let control=this.profileForm.get('name');
    console.log(control?.value)
    console.log(this.profileForm.get('otro')?.value)
    console.log(this.profileForm.valid)
    console.log(control?.errors)
    console.log(control?.getError('minlength')['requiredLength'])
   
  }
}
