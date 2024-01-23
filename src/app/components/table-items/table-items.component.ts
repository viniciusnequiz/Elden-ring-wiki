import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-items',
  standalone: true,
  imports: [],
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.scss'
})
export class TableItemsComponent {
  @Input() objWithTheInformations: any

  ngOnInit() {
  console.log(this.objWithTheInformations)

  }

}
