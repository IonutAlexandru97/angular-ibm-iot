import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  public pushRightClass: string;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

}
