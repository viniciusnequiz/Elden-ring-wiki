import { Component, Input } from '@angular/core';
import { CardsOfItensComponent } from '../cards-of-itens/cards-of-itens.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompleteCardInfoComponent } from '../complete-card-info/complete-card-info.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardsOfItensComponent, CommonModule, FormsModule, CompleteCardInfoComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
   @Input() routeTarget: any
   listOfItems = []
   timeOutForANewRequest: any
   page: number = 0
   totalOfPages: number = 1
   searchInput: string = ''

    async searchByNameOnInput() {
      clearTimeout(this.timeOutForANewRequest)
      this.timeOutForANewRequest = setTimeout(async () =>{
        const request = await fetch(`https://eldenring.fanapis.com/api/${this.routeTarget.split(" ")[0]}?name=${this.searchInput}`)
        const data = await request.json()
        this.totalOfPages = this.verifyTotalOfPages(data.total, 20)
        this.listOfItems = data.data
        this.page = 0
      }, 500) 
   }

   async changePage(newPage: number) {
    if(newPage > this.totalOfPages || newPage < 0) return
    const request = await fetch(`https://eldenring.fanapis.com/api/${this.routeTarget.split(" ")[0]}?name=${this.searchInput}&page=${newPage}`)
    const data = await request.json()
    this.page = newPage
    this.listOfItems = data.data
   }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'})
  }

   verifyTotalOfPages(totalCount: number, limitPerPage: number){
      let totalPages: number = totalCount / limitPerPage
      if(totalPages % 1 === 0) return totalPages - 1
      return parseInt((totalPages).toFixed()) - 1
   }
   
   async ngOnChanges(){
    const request = await fetch(`https://eldenring.fanapis.com/api/${this.routeTarget.split(" ")[0]}`)
    const data = await request.json()
    this.page = 0
    this.totalOfPages = this.verifyTotalOfPages(data.total, 20)
    this.listOfItems = data.data
   }
}
