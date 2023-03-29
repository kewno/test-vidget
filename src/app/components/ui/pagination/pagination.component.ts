import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() items: any[] = [{text: '1', href: '1'}, {text: '2', href: '2'}, {text: '3', href: '3'}]

}