import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() id : string = ''
  @Input() name : string = ''
  @Input() placeholder : string = ''
  @Input() items : any[] = ['Вариант 1', 'Вариант 2']

  @Output() onSelectValue = new EventEmitter();

  getSelect(event: any) {
    this.onSelectValue.emit(event)
  }

}
