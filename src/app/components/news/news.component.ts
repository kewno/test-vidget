import {Component, Input} from '@angular/core';
import {NewsService} from "../../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input() items : any[] = []
  @Input() search : string = ''

  constructor(private newsService: NewsService) {

  }

  ngOnInit() {
    this.newsService.getArticle()
      .subscribe(response => {
        console.log(response)
        this.items = response.articles
      })
  }
}
