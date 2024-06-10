import { Component, inject } from '@angular/core';
import { New } from 'src/app/models/news.model';
import { NewsService } from '../../services/news/news.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styles: [
  ]
})
export class NewListComponent {
  private ns = inject(NewsService)
  private route = inject(ActivatedRoute)

  news: New[] | undefined
  query: string = ''
  err: boolean = false

  ngOnInit(): void {

    this.route.queryParams.subscribe((params: any) => {
      if (Object.keys(params).length === 0) {
        this.ns.getNews().subscribe({
          next: (res: any) => {
            this.news = res.articles
          }
        })
        return
      } else {
        this.ns.getNews(params['p'], params['q']).subscribe({
          next: (res: any) => {
            this.news = res.articles
          },
          error: (err) => {
            this.err = true
            console.log('--------------------')
            console.log(err)
          },
          complete: () => {
            if (this.news?.length === 0)
              this.query = params['q']
          }
        })
      }
    })

  }

}
