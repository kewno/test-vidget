import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() items: any[] = []

  portionsNumber: number = 1
  portions: any = []
  portionsElem: any = []

  @Output() checkChangePath = new EventEmitter<MouseEvent>();

  changePath(event: MouseEvent) {
    this.checkChangePath.emit(event)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.portionsNumber = 1
      this.portions = this.setPortions(this.items.length) //coll pages
      this.portionsElem = this.setPortionsElem(this.portions, this.portionsNumber)
    }
  }

  setPortions(total: number) {

    let portion = total
    let arr = []
    for (let i = 1; i <=  portion; i++) {
      arr.push(i)
    }
    return arr
  }

  setPortionsElem(portions: [], portionNumber: number) {
    let start = ((portionNumber - 1) * 5) + 1
    let end;
    if (portions.length < 5) {
      end = portionNumber * portions.length
    } else {
      end = portionNumber * 5
    }

    let arr = []
    for (let i = start; i <= end; i++) {
      arr.push(i)
    }

    return arr
  }

  setPortionsNumber(arg: number) {
    if ((this.portionsNumber + arg) > 0) {
      if ((this.portionsNumber + arg) < this.items.length) {
        this.portionsNumber += arg
        this.portionsElem = this.setPortionsElem(this.portions, this.portionsNumber)
      }
    }
  }
}
