import { Directive } from '@angular/core';

@Directive({
  selector: '[clientPage],client-page',
  host: {
    class: 'client-page'
  }
})
export class PageDirective {

  constructor() { }

}
