import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showShadow: Boolean = false;
  
  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    const header = document.getElementById('header');
    if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
      this.showShadow = true;
    } else {
      this.showShadow = false;
    }
  }
}
 

