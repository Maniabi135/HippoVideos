import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  client = [
    './../../assets/chargebee.png',
    './../../assets/gonlit.png',
    './../../assets/cloud.png',
    './../../assets/tailwind.png',
    './../../assets/york.png'
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
