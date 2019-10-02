import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('inputName').focus();
  }

}
