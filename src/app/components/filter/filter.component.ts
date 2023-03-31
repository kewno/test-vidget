import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() checkClick = new EventEmitter<MouseEvent>();

  @Input() categoryElem: any[] = []
  @Input() countryElem: any[] = []
  @Input() countryPlace = ''
  @Input() categoryPlace = ''

  @Output() countrySelectValue = new EventEmitter();
  @Output() categorySelectValue = new EventEmitter();

  getSelectCountry(event: any) {
    this.countrySelectValue.emit(event)
  }
  getSelectCategory(event: any) {
    this.categorySelectValue.emit(event)
  }

  changeValue(event: KeyboardEvent) {
    //this.checkSeachText.emit(event)
  }

  getClick() {
    this.checkClick.emit()
  }
}
