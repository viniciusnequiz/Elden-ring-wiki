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
  teste: any = [1, 2]

  typeofItem(item:any){
    return typeof item
  }

  objectToArray(obj: any){
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    const objInArray = []
    for(let i = 0; i < keys.length; i++){
        objInArray.push({key: keys[i], value: values[i]})
    }
    return objInArray
  }
}
