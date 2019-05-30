import { Component, Renderer2, Inject } from '@angular/core';
import { ThemeService } from 'src/@fury/services/theme.service';
import { MatIconRegistry } from '@angular/material';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private themeService: ThemeService,
              private iconRegistry: MatIconRegistry,
              private render: Renderer2,
              @Inject(DOCUMENT) private document: Document){
    this.iconRegistry.setDefaultFontSetClass('material-icons');
    this.themeService.theme$.subscribe(theme => {
      if(theme[0]){
        this.render.removeClass(this.document.body, theme[0]);
      }
      this.render.addClass(this.document.body, theme[1]);
    });
  }
}
