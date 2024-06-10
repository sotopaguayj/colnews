import { Component, Input } from '@angular/core';
import { New } from 'src/app/models/news.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styles: [
  ]
})

export class NewItemComponent {
  @Input() new: New | null = null
}
