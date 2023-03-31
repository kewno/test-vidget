import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() dis: boolean = false
  @Input() href: string = ''
  @Input() text: string = ''
  @Input() id: string = ''
  @Input() func: any

  // constructor() {
  //   this.dis = false
  // }

  // workFunc() {
  //   return () => this.func()
  // }
}
