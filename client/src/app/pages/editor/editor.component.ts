import { Component, OnInit } from '@angular/core';
import { fadeInUpAnimation } from '../../../@client/animations/fade-in-up.animation';
import { fadeInRightAnimation } from '../../../@client/animations/fade-in-right.animation';
import { scaleInAnimation } from '../../../@client/animations/scale-in.animation';

@Component({
  selector: 'client-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [fadeInUpAnimation, fadeInRightAnimation, scaleInAnimation]
})
export class EditorComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

}
