import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  lat: number = 45.3855;
  lng: number = 25.3622;

  constructor() { }

  ngOnInit() {
  }

}
