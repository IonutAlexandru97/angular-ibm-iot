import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'client-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'client-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientCard {
}

// noinspection TsLint
@Component({
  selector: 'client-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'client-card-header' },
  template: `
    <div class="client-card-header-heading-group">
      <ng-content select="client-card-header-heading"></ng-content>
      <ng-content select="client-card-header-subheading"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="client-card-header-actions"></ng-content>
  `
})
export class ClientCardHeader {
}

// noinspection TsLint
@Component({
  selector: 'client-card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'client-card-content' },
  template: `
    <ng-content></ng-content>`
})
export class ClientCardContent {
}

// noinspection TsLint
@Directive({
  selector: 'client-card-header-heading',
  host: { 'class': 'client-card-header-heading' }
})
export class ClientCardHeaderTitle {
}

// noinspection TsLint
@Directive({
  selector: 'client-card-header-subheading',
  host: { 'class': 'client-card-header-subheading' }
})
export class ClientCardHeaderSubTitle {
}

// noinspection TsLint
@Directive({
  selector: 'client-card-header-actions',
  host: { 'class': 'client-card-header-actions' }
})
export class ClientCardHeaderActions {
}

// noinspection TsLint
@Directive({
  selector: 'client-card-actions',
  host: {
    'class': 'client-card-actions',
    '[class.client-card-actions-align-end]': 'align === "end"',
  }
})
export class ClientCardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}
