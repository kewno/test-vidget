import {Component} from '@angular/core';

@Component({
  selector: 'app-ui-kit',
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.scss']
})
export class UiKitComponent {
  modal = true
  text: string = ''

  setInput(newText: string) {
    this.text = newText
    console.log(newText)
  }
  // href: string | undefined = '123'
}
