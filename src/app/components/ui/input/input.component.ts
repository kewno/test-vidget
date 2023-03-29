import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() text: string = ''
  @Input() type: string = ''
  @Input() id: string = ''
  @Input() name: string = ''
  @Input() placeholder: string = ''

  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();
}
