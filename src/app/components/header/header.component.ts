import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  private router = inject(Router)

  private fBuilder = inject(FormBuilder)

  query: FormGroup = new FormGroup({})

  ngOnInit(): void {
    this.query = this.fBuilder.group(
      {
        q: ['', Validators.required]
      }
    )
  }
  setQuery(q: string) {
    let nav: NavigationExtras = {
      queryParams: {
        q,
        p: 1
      }
    }
    this.router.navigate([], nav)
  }

  removeFilter() {
    this.query.reset()
    this.router.navigate(['/home'], {
      queryParams: null
    })
  }
}
