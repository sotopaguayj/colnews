import { Component, inject } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [
  ]
})
export class PaginationComponent {
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private page: number = 1
  private qp: { p?: number, q?: string } = {}
  private nav: NavigationExtras = {}

  sig() {
    this.page += 1
    this.route.queryParams.subscribe((pr) => {
      if (pr['q']) {
        this.qp = { q: pr['q'], p: this.page, }
      } else {
        this.qp = { p: this.page }
      }
      this.nav = { queryParams: this.qp }
      this.router.navigate([], this.nav)
    })
  }

  ant() {
    if (this.page > 1) {
      this.page -= 1
      this.route.queryParams.subscribe((pr) => {
        if (pr['q']) {
          this.qp = { q: pr['q'], p: this.page, }
        } else {
          this.qp = { p: this.page }
        }
        this.nav = { queryParams: this.qp }
        this.router.navigate([], this.nav)
      })
    }
    return
  }

}
