import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  @Input() items: any[] = [{text: 'Top headlines', href: 'headlines'}, {text: 'Everything', href: 'everything'}]
}
