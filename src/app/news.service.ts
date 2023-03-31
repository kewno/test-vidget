import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey: string

  constructor(private http: HttpClient) {
    this.apiKey = '9f2be620567e443192f6e7bf52089ce8'
  }

  getArticle({type= 'everything', keyword = '', page='1', country= '', category= ''}): Observable<any> {
    if (type == 'everything') {
      return this.http.get<any>(`https://newsapi.org/v2/${type}?q=${keyword}&pageSize=5&page=${page}&apiKey=${this.apiKey}`)
    } else if (type == 'top-headlines') {
        if (country != '' && category != '') {
          return this.http.get<any>(`https://newsapi.org/v2/${type}?&pageSize=5&page=${page}&country=${country}&category=${category}&apiKey=${this.apiKey}`)
        } else if (country != '') {
          return this.http.get<any>(`https://newsapi.org/v2/${type}?&pageSize=5&page=${page}&country=${country}&apiKey=${this.apiKey}`)
        } else if (category != '') {
          return this.http.get<any>(`https://newsapi.org/v2/${type}?&pageSize=5&page=${page}&category=${category}&apiKey=${this.apiKey}`)
        } else {
          return this.http.get<any>(`https://newsapi.org/v2/${type}?&pageSize=5&page=${page}&apiKey=${this.apiKey}`)
        }
        //return this.http.get<any>(`https://newsapi.org/v2/${type}?q=${keyword}&pageSize=5&page=${page}&apiKey=${this.apiKey}`)
    } else {
        return this.http.get<any>(`https://newsapi.org/v2/${type}?q=${keyword}&pageSize=5&page=${page}&apiKey=${this.apiKey}`)
    }

  }

  // getArticleTopHeadlines({type= 'top-headlines', country='ru', category = 'technology', page='1'}): Observable<any> {
  //   return this.http.get<any>(`https://newsapi.org/v2/${type}?&pageSize=5&page=${page}&country=${country}&category=${category}&apiKey=618179d9b76746abbdc22e4115176060`)
  // }
  //https://newsapi.org/v2/${type}?&pageSize=5&page=${page}&country=${country}&category=${category}&apiKey=618179d9b76746abbdc22e4115176060


  // getArticle(type?: string, keyword?: string, page: string = '1'): Observable<any> {
  //   return this.http.get<any>('https://newsapi.org/v2/everything?q=keyword&pageSize=5&page=page&apiKey=${this.apiKey}')
  // }
}
