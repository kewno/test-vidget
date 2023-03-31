import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NewsService} from "../../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input() items : any[] = []
  @Input() pages : any[] = []

  @Output() checkChangePath = new EventEmitter();

  changePath(event: MouseEvent) {
    this.checkChangePath.emit(event)
  }

}
