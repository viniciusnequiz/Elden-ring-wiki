import { Component, Input } from '@angular/core';
import { CardsOfItensComponent } from '../cards-of-itens/cards-of-itens.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardsOfItensComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
   @Input() routeTarget: any
   listOfItems = []
   timeOutForANewRequest: any

    async searchByNameOnInput($event: any) {
      clearTimeout(this.timeOutForANewRequest)
      this.timeOutForANewRequest = setTimeout(async () =>{
        const target = $event.target.value
        const request = await fetch(`https://eldenring.fanapis.com/api/${this.routeTarget.split(" ")[0]}?name=${target}`)
        const data = await request.json()
        this.listOfItems = data.data
      }, 500) 
   }
   
   async ngOnChanges(){
    const request = await fetch(`https://eldenring.fanapis.com/api/${this.routeTarget.split(" ")[0]}`)
    const data = await request.json()
    this.listOfItems = data.data
   }
}
