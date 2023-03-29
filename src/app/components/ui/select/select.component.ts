import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() id : string = ''
  @Input() name : string = ''
  @Input() items : any[] = [{text: 'В1', value: 'V1'}, {text: 'В2', value: 'V2'}, {text: 'В3', value: 'V3'}]
}
