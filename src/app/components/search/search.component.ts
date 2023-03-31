import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() checkClick = new EventEmitter<MouseEvent>();

  @Output() checkSeachText = new EventEmitter<KeyboardEvent>();

  changeValue(event: KeyboardEvent) {
    this.checkSeachText.emit(event)
  }

  getClick() {
    this.checkClick.emit()
  }

}
