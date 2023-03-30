import { Component } from '@angular/core';
import {NewsService} from "./news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-vidget'
  articles = []

  constructor(private newsService: NewsService) {

  }

  ngOnInit() {
    this.newsService.getArticle()
      .subscribe(response => {
        console.log(response)
        this.articles = response.articles
      })
  }
}
