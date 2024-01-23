import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-items',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.scss'
})
export class TableItemsComponent {
  @Input() objWithTheInformations: any

  typeofItem(item:any){
    console.log(typeof item)
    return typeof item
  }
}
