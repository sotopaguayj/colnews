import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private http = inject(HttpClient)



  page: number = 1
  size: string = '5'
  lang: string = 'es'
  query: string = 'tech'

  private api(p: number, s: string, l: string, q: string) {
    return `https://newsapi.org/v2/everything?q=${q}&pageSize=${s}&page=${p}&language=${l}&apiKey=3c8f1602571d4b5c9e0253dc5cdb807e`
  }


  getNews(p?: number, q?: string): Observable<any> {
    if (p && q) {
      console.log(`Page: ${p}, Query: ${q}`)
      return this.http.get(this.api(p, this.size, this.lang, q))
    }

    if (q)
      return this.http.get(this.api(this.page, this.size, this.lang, q))

    if (p)
      return this.http.get(this.api(p, this.size, this.lang, this.query))
    return this.http.get(this.api(this.page, this.size, this.lang, this.query))
  }

}
