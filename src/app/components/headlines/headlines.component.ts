import {Component, EventEmitter, Output} from '@angular/core';
import {NewsService} from "../../news.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent {

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) {

  }

  @Output() countrySelectValue = new EventEmitter();
  @Output() categorySelectValue = new EventEmitter();
  @Output() checkChangePath = new EventEmitter();

  getSelectCountry(event: any) {
    this.country = (event.target as HTMLInputElement).value
    this.countrySelectValue.emit()
  }
  getSelectCategory(event: any) {
    this.category = (event.target as HTMLInputElement).value
    this.categorySelectValue.emit()
  }

  country = 'us'
  category = ''

  countryPlace = 'Country'
  categoryPlace = 'Category'

  categoryElem = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  countryElem = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch',
    'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu',
    'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx',
    'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru',
    'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']

  paginationElem = ''

  items : any[] = []
  arrPages : any = []

  changePath(event: MouseEvent) {
    let page = (event.target as HTMLInputElement).innerHTML

    this.newsService.getArticle({type: 'top-headlines', page: page, country: this.country, category: this.category})
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

    this.newsService.getArticle({type: 'top-headlines', country: this.country, category: this.category})
      .subscribe(response => {
        this.items = response.articles
        this.arrPages = this.setPages(response.totalResults)
      })
  }

  checkClick() {
    this.setFirstPage()
    this.newsService.getArticle({type: 'top-headlines', country: this.country, category: this.category})
      .subscribe(response => {
        this.items = response.articles
        this.arrPages = this.setPages(response.totalResults)
      })
  }
}
