import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getArticle(type?: string, keyword?: string, page: string = '1'): Observable<any> {
    return this.http.get<any>('https://newsapi.org/v2/everything?q=keyword&pageSize=5&page=page&apiKey=46399c6ef7464436b7826b844734bb81')

  }
}
