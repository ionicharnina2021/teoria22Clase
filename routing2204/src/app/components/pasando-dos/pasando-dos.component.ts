import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasando-dos',
  templateUrl: './pasando-dos.component.html',
  styleUrls: ['./pasando-dos.component.css']
})
export class PasandoDosComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  uno:unknown;
  otro:unknown;
  ngOnInit(): void {
    this.uno=this.route.snapshot.params['uno'],
    this.otro=this.route.snapshot.params['otro']
  }

}
