import { Directive } from '@angular/core';

@Directive({
  selector: '[clientTitle],client-title',
  host: {
    class: 'client-title'
  }
})
export class TitleDirective {

  constructor() { }

}
