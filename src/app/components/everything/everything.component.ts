import {Component, EventEmitter, Output} from '@angular/core';
import {NewsService} from "../../news.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent {

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) {

  }

  @Output() checkChangePath = new EventEmitter();

  textSearch: string = 'keyword'
  paginationElem = ''
  items : any[] = []

  arrPages : any = []

  changePath(event: MouseEvent) {
    let page = (event.target as HTMLInputElement).innerHTML

    this.newsService.getArticle({type: 'everything', page: page, keyword: this.textSearch})
      .subscribe(response => {
        this.items = response.articles
        this.arrPages = this.setPages(response.totalResults)
      })
  }



  setPages(total: number, pageSize: number = 5) {
    let pages = Math.ceil(total / pageSize)

    let arr = []
    for (let i = 1; i <= pages; i++) {
      arr.push(i)
    }
    return arr
  }


  setFirstPage() {
    this.router.navigate(['1'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.setFirstPage()

    this.newsService.getArticle({type: 'everything', keyword: 'keyword'})
      .subscribe(response => {
        this.items = response.articles
        this.arrPages = this.setPages(response.totalResults)
      })
  }

  checkSeachText(event: KeyboardEvent) {
    this.textSearch = (event.target as HTMLInputElement).value
  }

  checkClick() {
    this.setFirstPage()
    this.newsService.getArticle({type: 'everything', keyword: this.textSearch || 'keyword'})
      .subscribe(response => {
        this.items = response.articles
        this.arrPages = this.setPages(response.totalResults)
      })
  }
}
