import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  
  topNav= [
    { 
      name: 'PERSONALIZE VIDEO', 
      url: '#',
      arrow: false,
      class: true
    },
    { 
      name: 'FEATURES', 
      url: '#',
      arrow: false
    },
    { 
      name: 'RESOURCES', 
      url: '#',
      arrow: true
    },
    { 
      name: 'SOLUTIONS', 
      url: '#',
      arrow: true
    },
    { 
      name: 'INTEGRATIONS', 
      url: '#',
      arrow: true
    },
    { 
      name: 'PRICING', 
      url: '#',
      arrow: false
    }
  ]
  
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  
  menuIcon(){
    const menu = document.getElementById('navMenu')
    if(menu.classList.contains('showBar')){
      menu.classList.remove('showBar');
      document.getElementById("nav").classList.remove("show")
    }else{
      menu.classList.add('showBar')
      document.getElementById("nav").classList.add("show");
    }
  }

}
