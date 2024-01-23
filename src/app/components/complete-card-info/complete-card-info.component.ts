import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableItemsComponent } from '../table-items/table-items.component';


@Component({
  selector: 'app-complete-card-info',
  standalone: true,
  imports: [CommonModule, FormsModule, TableItemsComponent],
  templateUrl: './complete-card-info.component.html',
  styleUrl: './complete-card-info.component.scss'
})
export class CompleteCardInfoComponent {
  @Input() type: string = ''
  @Input() objOfItem: any = { erro: 'something wrong'}

  typeofItem(item:any){
    return typeof item
  }
}
